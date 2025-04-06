import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const APP_URL = process.env.APP_URL || 'http://localhost:3000';
const API_URL = process.env.API_URL || `http://localhost:${port}`;

// Get current directory name (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS with proper configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://reelcatcher.fun',
  'https://www.reelcatcher.fun'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

// Cleanup function for downloaded files
const cleanupFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) console.error('Error deleting file:', err);
      else console.log(`Cleaned up file: ${filePath}`);
    });
  }
};

// Cleanup all files in downloads directory on server start
const cleanupDownloadsDir = () => {
  if (fs.existsSync(downloadsDir)) {
    fs.readdir(downloadsDir, (err, files) => {
      if (err) {
        console.error('Error reading downloads directory:', err);
        return;
      }
      files.forEach(file => {
        const filePath = path.join(downloadsDir, file);
        cleanupFile(filePath);
      });
    });
  }
};

// Create downloads directory if it doesn't exist
const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir);
}

// Serve static files from downloads directory with proper headers
app.use('/downloads', (req, res, next) => {
  res.setHeader('Content-Disposition', 'attachment');
  express.static(downloadsDir)(req, res, next);
});

// Add a test endpoint to verify server is running
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Validate Instagram URL
function isValidInstagramUrl(url) {
  const pattern = /^https?:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/([A-Za-z0-9-_]+)/i;
  return pattern.test(url);
}

app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  if (!isValidInstagramUrl(url)) {
    return res.status(400).json({ error: 'Invalid Instagram URL. Please provide a valid Instagram reel URL.' });
  }

  // Check if Python script exists
  const pythonScriptPath = path.join(__dirname, 'download_reel.py');
  if (!fs.existsSync(pythonScriptPath)) {
    console.error('Python script not found:', pythonScriptPath);
    return res.status(500).json({ error: 'Download script not found' });
  }

  try {
    // Check if Python is available
    const pythonVersionCheck = spawn('python', ['--version']);
    let pythonError = false;
    
    pythonVersionCheck.on('error', (error) => {
      console.error('Python is not available:', error);
      pythonError = true;
      res.status(500).json({ error: 'Python is not installed or not available in PATH' });
    });

    pythonVersionCheck.on('close', (code) => {
      if (pythonError) return;

      // Run the Python script
      const pythonProcess = spawn('python', [pythonScriptPath, url, downloadsDir]);
      
      let outputData = '';
      let errorData = '';

      pythonProcess.stdout.on('data', (data) => {
        const output = data.toString();
        console.log('Python output:', output);
        outputData += output;
      });

      pythonProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error('Python error:', error);
        errorData += error;
      });

      pythonProcess.on('error', (error) => {
        console.error('Failed to start Python process:', error);
        if (!res.headersSent) {
          res.status(500).json({ error: 'Failed to start download process' });
        }
      });

      pythonProcess.on('close', (code) => {
        if (res.headersSent) return;

        console.log('Python process exited with code:', code);
        console.log('Final output:', outputData);
        
        if (code !== 0 || errorData) {
          // Check for specific error messages
          const errorMatch = outputData.match(/ERROR:(.*)/);
          if (errorMatch) {
            const errorMessage = errorMatch[1].trim();
            return res.status(500).json({ error: errorMessage });
          }
          
          // If no specific error message found, return the error data or a generic message
          return res.status(500).json({ 
            error: errorData || 'Failed to download video. Please try again later.'
          });
        }

        // Extract filename from success message
        const successMatch = outputData.match(/SUCCESS:(.*)/);
        if (!successMatch) {
          return res.status(500).json({ error: 'Failed to process video.' });
        }

        const filename = successMatch[1].trim();
        const downloadUrl = `${API_URL}/downloads/${filename}`;
        
        console.log('Download successful. URL:', downloadUrl);
        
        res.json({
          downloadUrl,
          message: 'Video downloaded successfully'
        });

        // Clean up: Delete the file after 5 minutes
        setTimeout(() => {
          const filePath = path.join(downloadsDir, filename);
          cleanupFile(filePath);
        }, 5 * 60 * 1000);
      });
    });
  } catch (error) {
    console.error('Server error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (!res.headersSent) {
    res.status(500).json({ error: 'Something went wrong! Please try again later.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Make sure Python and instaloader are installed on your system`);
  console.log(`Downloads directory: ${downloadsDir}`);
  
  // Clean up any leftover files from previous sessions
  cleanupDownloadsDir();
  
  // Check if Python script exists
  const pythonScriptPath = path.join(__dirname, 'download_reel.py');
  if (!fs.existsSync(pythonScriptPath)) {
    console.error('WARNING: Python script not found:', pythonScriptPath);
  } else {
    console.log('Python script found at:', pythonScriptPath);
  }
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Cleaning up...');
  cleanupDownloadsDir();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Cleaning up...');
  cleanupDownloadsDir();
  process.exit(0);
});

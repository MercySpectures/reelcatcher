
const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/downloads', express.static('downloads'));

// Ensure downloads directory exists
const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// API endpoint for downloading Instagram reels
app.post('/api/download', async (req, res) => {
  const { url, customName } = req.body;
  
  if (!url) {
    return res.status(400).json({ 
      error: 'URL is required' 
    });
  }

  // Directory to save the downloaded video
  const saveDirectory = path.join(__dirname, 'downloads');
  
  try {
    // Call the Python script with the Instagram URL and save directory
    const filename = customName ? `${customName}.mp4` : `reel_${Date.now()}.mp4`;
    
    exec(`python download_reel.py "${url}" "${saveDirectory}" "${filename}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing Python script:', stderr);
        return res.status(500).json({ 
          error: `Failed to download reel: ${stderr}` 
        });
      }
      
      console.log('Python script output:', stdout);
      
      if (stdout.includes('Downloaded successfully')) {
        // Generate the download link
        const downloadLink = `http://localhost:${PORT}/downloads/${filename}`;
        
        return res.json({ 
          status: 'success',
          message: 'Video downloaded successfully',
          downloadLink
        });
      } else if (stdout.includes('Error:')) {
        return res.status(400).json({ 
          error: stdout.trim() 
        });
      } else {
        return res.status(500).json({ 
          error: 'Unknown error occurred' 
        });
      }
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: `Server error: ${error.message}` 
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Make sure Python and instaloader are installed`);
  console.log(`Downloads will be saved to: ${downloadsDir}`);
});

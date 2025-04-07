# Reel Catcher Backend

## Setup

1. Install dependencies:
```bash
npm install
pip install -r requirements.txt
```

2. Create `.env` file:
```env
PORT=3001
APP_URL=https://reelcatcher-front.onrender.com
API_URL=https://reelcatcher.onrender.com
```

3. Run the server:
```bash
npm start
```

## Deployment to Render

1. Create a new Web Service
2. Connect your GitHub repository
3. Configure:
   - Build Command: `npm install && pip install -r requirements.txt`
   - Start Command: `npm start`
   - Environment Variables:
     ```
     PORT=3001
     APP_URL=https://reelcatcher-front.onrender.com
     API_URL=https://reelcatcher.onrender.com
     ```

## Important Notes

- Make sure Python and pip are installed on the deployment server
- The `downloads` directory will be created automatically
- Files are automatically cleaned up after download 
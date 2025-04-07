# Reel Catcher Frontend

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
VITE_API_URL=https://reelcatcher.onrender.com/api/download
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment to Render

1. Create a new Static Site
2. Connect your GitHub repository
3. Configure:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Environment Variables:
     ```
     VITE_API_URL=https://reelcatcher.onrender.com/api/download
     ```

## Important Notes

- The frontend expects the backend API to be running at the URL specified in VITE_API_URL
- Make sure CORS is properly configured in the backend to accept requests from your frontend domain 
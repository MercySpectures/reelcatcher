
# Instagram Reel Downloader Server Setup

This document explains how to set up and run the server needed for downloading Instagram Reels.

## Prerequisites

1. Node.js installed on your computer
2. Python installed on your computer
3. An Instagram account (for authentication)

## Step 1: Install Required Node.js Packages

Create a new directory for your server, copy the `server.js` file there, and run:

```bash
npm init -y
npm install express cors
```

## Step 2: Install Python Dependencies

Install the required Python package:

```bash
pip install instaloader
```

## Step 3: Set Up Instagram Authentication

1. Log in to Instagram in your browser
2. Open the developer tools (F12 or right-click -> Inspect)
3. Go to the Application tab
4. Find Cookies under Storage
5. Select the Instagram domain
6. Find the 'sessionid' cookie and copy its value

Set this as an environment variable:

- **On Windows (Command Prompt):**
  ```
  set INSTAGRAM_SESSION_ID=your_session_id_here
  ```

- **On Windows (PowerShell):**
  ```
  $env:INSTAGRAM_SESSION_ID="your_session_id_here"
  ```

- **On macOS/Linux:**
  ```
  export INSTAGRAM_SESSION_ID=your_session_id_here
  ```

## Step 4: Run the Server

```bash
node server.js
```

You should see a message that the server is running on http://localhost:3001.

## Step 5: Connect with the React App

The React app is already configured to communicate with this server. Make sure the server is running before trying to download Instagram reels through the web interface.

## Troubleshooting

- **Authentication Issues:** If you see errors about authentication, your session ID might have expired. Get a new session ID from your browser and update the environment variable.
- **File Permissions:** Make sure the 'downloads' directory has the proper write permissions.
- **CORS Issues:** If you're experiencing CORS issues, make sure the React app is running on the expected origin.

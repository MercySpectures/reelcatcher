import sys
import os
import instaloader
from datetime import datetime
import traceback
import time
import glob
import shutil

# Set UTF-8 encoding for output
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')
if sys.stderr.encoding != 'utf-8':
    sys.stderr.reconfigure(encoding='utf-8')

def sanitize_filename(filename):
    # Replace problematic characters with underscores
    invalid_chars = '<>:"/\\|?*'
    for char in invalid_chars:
        filename = filename.replace(char, '_')
    return filename

def find_video_file(directory):
    # Look for any .mp4 files in the directory and subdirectories
    pattern = os.path.join(directory, '**', '*.mp4')
    video_files = glob.glob(pattern, recursive=True)
    # Sort by modification time to get the most recent one
    if video_files:
        return max(video_files, key=os.path.getmtime)
    return None

def cleanup_directory(directory, keep_file=None):
    """Clean up all files in directory except the specified file."""
    try:
        if not os.path.exists(directory):
            return
            
        # Remove files
        for root, dirs, files in os.walk(directory, topdown=False):
            for file in files:
                try:
                    file_path = os.path.join(root, file)
                    if keep_file and os.path.basename(file_path) == keep_file:
                        continue
                    if os.path.exists(file_path):
                        os.remove(file_path)
                        print(f"Removed file: {file_path}")
                except Exception as e:
                    print(f"Warning: Failed to remove file {file}: {str(e)}")
            
            # Remove empty directories
            for dir_name in dirs:
                try:
                    dir_path = os.path.join(root, dir_name)
                    if os.path.exists(dir_path) and not os.listdir(dir_path):
                        os.rmdir(dir_path)
                        print(f"Removed empty directory: {dir_path}")
                except Exception as e:
                    print(f"Warning: Failed to remove directory {dir_name}: {str(e)}")
    except Exception as e:
        print(f"Warning: Error during cleanup: {str(e)}")

def download_reel(url, output_dir):
    try:
        print(f"Starting download process for URL: {url}")
        print(f"Output directory: {output_dir}")

        # Clean up any leftover files from previous downloads
        cleanup_directory(output_dir)

        # Normalize the output directory path
        output_dir = os.path.normpath(output_dir)
        print(f"Normalized output directory: {output_dir}")

        # Initialize instaloader with anonymous session
        L = instaloader.Instaloader(
            dirname_pattern=output_dir,  # Set the download directory
            download_videos=True,
            download_video_thumbnails=False,
            download_geotags=False,
            download_comments=False,
            save_metadata=False,
            compress_json=False,
            fatal_status_codes=[429, 404],
            max_connection_attempts=3
        )

        try:
            # Try to download anonymously first
            print("Attempting anonymous download...")
            L.context.get_and_write_raw(url)
            print("Successfully accessed URL anonymously")
        except Exception as e:
            print(f"Warning: Anonymous access failed: {str(e)}")
            # Continue anyway as we'll try to download the post directly

        # Extract post shortcode from URL
        try:
            if "/p/" in url:
                shortcode = url.split("/p/")[1].split("/")[0]
            elif "/reel/" in url:
                shortcode = url.split("/reel/")[1].split("/")[0]
            else:
                raise ValueError("URL must contain '/p/' or '/reel/'")
            
            print(f"Extracted shortcode: {shortcode}")
        except Exception as e:
            print(f"ERROR:Failed to extract shortcode from URL: {str(e)}")
            return

        # Create a unique filename
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = sanitize_filename(f"reel_{timestamp}.mp4")
        output_path = os.path.join(output_dir, filename)
        print(f"Target filename: {filename}")

        max_retries = 3
        for attempt in range(max_retries):
            try:
                print(f"Download attempt {attempt + 1}/{max_retries}")
                # Download the post
                print(f"Fetching post with shortcode: {shortcode}")
                post = instaloader.Post.from_shortcode(L.context, shortcode)
                
                if not post.is_video:
                    print("ERROR:This post does not contain a video")
                    return

                print("Starting video download...")
                L.download_post(post, target=output_dir)
                print("Download completed")
                break
            except instaloader.exceptions.LoginRequiredException:
                print("ERROR:This content requires login. Only public Instagram reels can be downloaded.")
                return
            except instaloader.exceptions.InstaloaderException as e:
                print(f"Attempt {attempt + 1} failed: {str(e)}")
                if attempt < max_retries - 1:
                    print("Retrying after 2 seconds...")
                    time.sleep(2)
                else:
                    print(f"ERROR:Failed to download after {max_retries} attempts: {str(e)}")
                    return

        # Find and rename the downloaded video file
        found = False
        print("Looking for downloaded video file...")
        
        # Wait for up to 5 seconds for the file to appear
        for _ in range(5):
            # Find the most recently downloaded video file
            video_file = find_video_file(output_dir)
            if video_file:
                try:
                    # Ensure the target file doesn't exist
                    if os.path.exists(output_path):
                        os.remove(output_path)
                    
                    # Copy instead of rename to handle cross-device moves
                    shutil.copy2(video_file, output_path)
                    os.remove(video_file)  # Remove the original after successful copy
                    found = True
                    print(f"Copied video file to: {filename}")
                    
                    # Clean up everything except our target file
                    cleanup_directory(output_dir, keep_file=filename)
                    
                    print(f"SUCCESS:{filename}")
                    return
                except Exception as e:
                    print(f"ERROR:Failed to copy video file: {str(e)}")
                    return
            
            print(f"File not found yet, waiting... ({_ + 1}/5)")
            time.sleep(1)

        if not found:
            print("ERROR:Video file not found after download")
            # List directory contents for debugging
            print("Directory contents:")
            for root, dirs, files in os.walk(output_dir):
                print(f"\nDirectory: {root}")
                if not dirs and not files:
                    print("(Empty)")
                for dir_name in dirs:
                    print(f"  DIR: {dir_name}")
                for file in files:
                    print(f"  FILE: {file}")

    except instaloader.exceptions.InstaloaderException as e:
        print(f"ERROR:Instagram error: {str(e)}")
    except Exception as e:
        print(f"ERROR:Unexpected error: {str(e)}")
        print("Traceback:")
        traceback.print_exc()

if __name__ == "__main__":
    try:
        # Set UTF-8 encoding for the script
        if sys.platform.startswith('win'):
            # On Windows, set console to UTF-8 mode
            os.system('chcp 65001')
        
        if len(sys.argv) != 3:
            print("ERROR:Please provide both URL and output directory")
            print(f"Arguments received: {len(sys.argv)}")
            print(f"Arguments: {sys.argv}")
        else:
            url = sys.argv[1]
            output_dir = sys.argv[2]
            if not os.path.exists(output_dir):
                os.makedirs(output_dir)
            download_reel(url, output_dir)
    except Exception as e:
        print(f"ERROR:Script initialization failed: {str(e)}")
        traceback.print_exc()

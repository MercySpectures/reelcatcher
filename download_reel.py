
import instaloader
import sys
import os

def download_reel(url, save_path, custom_filename=None):
    try:
        # Get Instagram session ID from environment variable
        session_id = os.environ.get('INSTAGRAM_SESSION_ID')
        
        if not session_id:
            print("Error: INSTAGRAM_SESSION_ID environment variable not set")
            return
        
        # Initialize instaloader
        L = instaloader.Instaloader(download_videos=True, 
                                   download_video_thumbnails=False,
                                   download_geotags=False,
                                   download_comments=False,
                                   save_metadata=False,
                                   post_metadata_txt_pattern='')
        
        # Login with session ID
        L.context._session.cookies.set("sessionid", session_id, domain="instagram.com")
        
        try:
            # Extract shortcode from URL
            if '/reel/' in url:
                shortcode = url.split('/reel/')[1].split('/')[0]
            elif '/p/' in url:
                shortcode = url.split('/p/')[1].split('/')[0]
            else:
                print("Error: Invalid Instagram URL format")
                return
                
            # Get post from shortcode
            post = instaloader.Post.from_shortcode(L.context, shortcode)
            
            if not post.is_video:
                print("Error: This Instagram post is not a video")
                return
                
            # Set custom filename if provided
            if custom_filename:
                # Use a custom temporary filename pattern to rename later
                original_dirname = L.dirname_pattern
                L.dirname_pattern = save_path
                
                # Custom filename pattern for temporary download
                temp_basename = f"temp_{shortcode}"
                original_filename_pattern = L.filename_pattern
                L.filename_pattern = temp_basename
                
                # Download the post
                L.download_post(post, target=temp_basename)
                
                # Find the downloaded video file
                video_file = None
                for file in os.listdir(save_path):
                    if file.startswith(temp_basename) and file.endswith('.mp4'):
                        video_file = os.path.join(save_path, file)
                        break
                
                if video_file:
                    # Create the new filename with proper extension
                    new_file = os.path.join(save_path, f"{custom_filename}")
                    if not new_file.endswith('.mp4'):
                        new_file += '.mp4'
                    
                    # Rename the file
                    os.rename(video_file, new_file)
                    
                    # Remove other temporary files
                    for file in os.listdir(save_path):
                        if file.startswith(temp_basename):
                            try:
                                os.remove(os.path.join(save_path, file))
                            except:
                                pass
                    
                # Restore original patterns
                L.filename_pattern = original_filename_pattern
                L.dirname_pattern = original_dirname
            else:
                # Use default download without custom filename
                original_dirname = L.dirname_pattern
                L.dirname_pattern = save_path
                L.download_post(post, target=shortcode)
                L.dirname_pattern = original_dirname
                
            print("Downloaded successfully!")
            
        except instaloader.exceptions.InstaloaderException as e:
            print(f"Error: {str(e)}")
            
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python download_reel.py <instagram_url> <save_path> [custom_filename]")
        sys.exit(1)
        
    url = sys.argv[1]
    save_path = sys.argv[2]
    custom_filename = sys.argv[3] if len(sys.argv) > 3 else None
    
    download_reel(url, save_path, custom_filename)

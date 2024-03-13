const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


export const YOUTUBE_VIDEOS_URL =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=6&key=" + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DATA = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + "&id=";

export const YOUTUBE_CHANNEL_DATA = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+ GOOGLE_API_KEY + "&id=";

export const YOUTUBE_VIDEO_COMMENTS = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" + GOOGLE_API_KEY + "&videoId=";
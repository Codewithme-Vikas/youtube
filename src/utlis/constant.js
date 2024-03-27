const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

// this is a limit, to show the live chat on the page
export const chatElementOnPage = 30;

export const YOUTUBE_VIDEOS_URL =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=6&key=" + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DATA = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + "&id=";

export const YOUTUBE_CHANNEL_DATA = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+ GOOGLE_API_KEY + "&id=";

export const YOUTUBE_VIDEO_COMMENTS = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" + GOOGLE_API_KEY + "&videoId=";


export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const YOUTUBE_LIVE_BROADCAST = "https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=snippet%2CcontentDetails%2Cstatistics&broadcastStatus=active&key=" + GOOGLE_API_KEY;

export const YOUTUBE_CATEGORY_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=6&key=" + GOOGLE_API_KEY + "&videoCategoryId=";

// export const YOUTUBE_REGION_CODE = "https://youtube.googleapis.com/youtube/v3/i18nRegions?part=snippet&key=" + GOOGLE_API_KEY;

export const YOUTUBE_CATEGORYIES = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_VIDEOS = " https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + GOOGLE_API_KEY + "&q="
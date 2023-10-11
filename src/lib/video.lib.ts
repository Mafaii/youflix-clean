import { fetchData } from "@/utils/fetch.utils";
import { ClipData } from "@/utils/types";
import { data as staticData } from '../data/data'

const GOOGLE_API_URL_SEARCH = "https://youtube.googleapis.com/youtube/v3/search?";
const GOOGLE_API_URL_POPULAR = "https://youtube.googleapis.com/youtube/v3/videos?";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_VIDEO_URL = "https://www.youtube.com/watch?v=";


const isItBuildForDevelopment = process.env.DEVELOPMENT;



interface GoogleResponse {
    error?: {
        code: number
    }
    items: GoogleResponseItemSearch[] | GoogleResponseItemPopular[],
}

interface GoogleResponseItemPopular extends GoogleResponseSnippet {
    id: string,
    statistics: {
        viewCount: string,
        likeCount: string,
    }
}

interface GoogleResponseItemSearch extends GoogleResponseSnippet {
    id: {
        videoId: string,
    }
}

interface GoogleResponseSnippet {
    snippet: {
        title: string,
        description: string,
        publishedAt: string,
        thumbnails: {
            high: {
                url: string
            }
        }

    }
}



async function getVideos(keyword: string, popular: boolean = false): Promise<ClipData[]> {
    if (!GOOGLE_API_KEY) throw Error("No API Key") //or lets throw error
    try {
        if (isItBuildForDevelopment) { //if deployment just return data (which was fetched previously)
            return staticData;
        }
        const data: GoogleResponse = await fetchData<GoogleResponse>(popular ? createPopularLink() : createSearchLink(keyword), GOOGLE_API_KEY);
        if (data.error) {
            console.log(data.error);
            return [];
        }
        const clips = data.items.map(el => transformData(el));
        return clips;
    } catch (error) {
        // throw Error(`Error While geting Videos for keyword: ${keyword}`);
        console.log(error);
        return [];
    }
}

async function getVideoData(videoId: string): Promise<ClipData | undefined> {
    if (!GOOGLE_API_KEY) throw Error("No API Key") //or lets throw error

    try {
        const data = await fetchData<GoogleResponse>(createVideoDataLink(videoId), GOOGLE_API_KEY);

        if (data.error || data.items.length === 0) {
            console.log(data.error);
            return undefined;
        }
        const clips = data.items.map(el => transformData(el));
        return clips[0];
    } catch (error) {
        // throw Error(`Error While geting Videos for keyword: ${keyword}`);
        console.log(error);
        return undefined;
    }
}

function filterVideosWithErrors(data: ClipData[]): ClipData[] {
    return data.filter(el => el.id); //as i saw that data gets id undefinied sometimes so ....
}

function createVideoLink(videoId: string): string {
    return `${GOOGLE_VIDEO_URL}${videoId}`;
}
function createVideoDataLink(videoId: string): string {
    return `${GOOGLE_API_URL_POPULAR}part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`;
}
function createSearchLink(keyword: string): string {
    return `${GOOGLE_API_URL_SEARCH}part=snippet&maxResults=25&q=${keyword}&type=video&key=${GOOGLE_API_KEY}`;
}
function createPopularLink(): string {
    return `${GOOGLE_API_URL_POPULAR}part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&type=video&key=${GOOGLE_API_KEY}`;
}



function transformData(data: GoogleResponseItemSearch | GoogleResponseItemPopular): ClipData {
    const id = (typeof data.id === 'string') ? data.id : data.id.videoId;
    return {
        id,
        title: data.snippet.title,
        description: data.snippet.description,
        published: data.snippet.publishedAt,
        imageUrl: data.snippet.thumbnails.high.url,
        ...("statistics" in data && data.statistics && {
            statistics: {
                viewCount: data.statistics.viewCount,
                likeCount: data.statistics.likeCount
            }
        })
    }
}

export {
    getVideos,
    getVideoData,
    filterVideosWithErrors
}
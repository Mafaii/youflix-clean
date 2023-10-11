import Header from '@/components/header/header.component'
import Banner from '@/components/banner/banner.component'
import MainContent from '@/components/main/main.content.component'
import { ClipData } from '@/utils/types'
import { GetServerSideProps } from 'next'
import { filterVideosWithErrors, getVideos } from '@/lib/video.lib'
import { convertToClipData, getWatchedVideos } from '@/lib/hasura.lib'

export interface VideoLib {
  featured?: ClipData[],
  travel?: ClipData[],
  disney?: ClipData[],
  popular?: ClipData[],
  watched?: ClipData[],
}


export const getServerSideProps: GetServerSideProps<VideoLib> = async (context) => {
  if (!context.req.cookies["token"]) { //if not logged move user to login page    
    return {
      redirect: { destination: "/login" },
      props: {}
    }
  }


  const featured = await getVideos("OnePiece");
  const filteredFeatured = filterVideosWithErrors(featured);

  const travel = await getVideos("travel");
  const filteredTravel = filterVideosWithErrors(travel);

  const disney = await getVideos("disney");
  const filteredDisney = filterVideosWithErrors(disney);

  const popular = await getVideos("popular", true);
  const filteredPopular = filterVideosWithErrors(popular);

  const token = context.req.cookies["token"];

  
  let watched;
  const myVideos = await getWatchedVideos(token);
  if (myVideos["data"]["youflix_user_videos"]) {
    const test = myVideos["data"]["youflix_user_videos"];
    watched = test.map(convertToClipData)
  }

  
  return {
    props: {
      featured: filteredFeatured || [],
      travel: filteredTravel || [],
      disney: filteredDisney || [],
      popular: filteredPopular || [],
      watched: watched || []
    }
  };
}


export default function Home(videoLib: VideoLib) {
  return (
    <main>
      <Header />
      <Banner featured={videoLib.featured} />
      <MainContent videoLib={videoLib} />
    </main>
  )
}

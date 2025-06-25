import { videos } from "../data/dummyvideos";
import VideoCard from "../components/VideoCard";

export default function Home({
  likedVideos,
  setLikedVideos,
  watchLater,
  setWatchLater,
}) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          likedVideos={likedVideos}
          setLikedVideos={setLikedVideos}
          watchLater={watchLater}
          setWatchLater={setWatchLater}
        />
      ))}
    </div>
  );
}

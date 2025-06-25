import { videos } from "../data/dummyvideos";
import VideoCard from "../components/VideoCard";

export default function WatchLater({ watchLater, setWatchLater }) {
  
  const savedVideos = videos.filter((video) => watchLater.includes(video.id));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Watch Later</h2>

      {savedVideos.length === 0 ? (
        <p className="text-gray-600">No videos saved for later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              likedVideos={[]} 
              setLikedVideos={() => {}}
              watchLater={watchLater}
              setWatchLater={setWatchLater}
            />
          ))}
        </div>
      )}
    </div>
  );
}

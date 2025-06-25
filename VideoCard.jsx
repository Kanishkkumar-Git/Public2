export default function VideoCard({
  video,
  likedVideos,
  setLikedVideos,
  watchLater,
  setWatchLater,
}) {
  const isLiked = likedVideos.includes(video.id);
  const isWatchLater = watchLater.includes(video.id);

  const toggleLike = () => {
    if (isLiked) {
      setLikedVideos(likedVideos.filter((id) => id !== video.id));
    } else {
      setLikedVideos([...likedVideos, video.id]);
    }
  };

  const toggleWatchLater = () => {
    if (isWatchLater) {
      setWatchLater(watchLater.filter((id) => id !== video.id));
    } else {
      setWatchLater([...watchLater, video.id]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{video.title}</h3>
        <p className="text-sm text-gray-600">{video.channel}</p>
        <p className="text-sm text-gray-500">{video.views} • {video.time}</p>

        <div className="mt-2 flex space-x-4">
          <button
            onClick={toggleLike}
            className={`font-semibold ${isLiked ? "text-red-500" : "text-gray-600"
              }`}
          >
            ❤️ {isLiked ? "Liked" : "Like"}
          </button>

          <button
            onClick={toggleWatchLater}
            className={`font-semibold ${isWatchLater ? "text-blue-500" : "text-gray-600"
              }`}
          >
            ➕ {isWatchLater ? "Saved" : "Watch Later"}
          </button>
        </div>
      </div>
    </div>

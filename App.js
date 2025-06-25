import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import { useState, useEffect } from "react";

function App() {
  const [likedVideos, setLikedVideos] = useState(() => {
    const saved = sessionStorage.getItem("liked");
    return saved ? JSON.parse(saved) : [];
  });

  const [watchLater, setWatchLater] = useState(() => {
    const saved = sessionStorage.getItem("watchLater");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("liked", JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar watchLaterCount={watchLater.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                likedVideos={likedVideos}
                setLikedVideos={setLikedVideos}
                watchLater={watchLater}
                setWatchLater={setWatchLater}
              />
            }
          />
          <Route
            path="/watch-later"
            element={
              <WatchLater
                watchLater={watchLater}
                setWatchLater={setWatchLater}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

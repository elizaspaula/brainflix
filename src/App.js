import "./App.css";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoList from "./components/VideosList/VideosList";
import VideosNav from "./components/VideosNav/VideosNav";
import videoDetails from "./data/videos.json";

function App() {
  return (
    <div className="App">
      <body>
        <VideosNav />
        <MainVideo />
        <VideoList />
      </body>
    </div>
  );
}

export default App;

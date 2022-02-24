import "./App.css";
import MainVideo from "./components/MainVideo/MainVideo";
import VideosNav from "./components/VideosNav/VideosNav";

function App() {
  return (
    <div className="App">
      <body>
        <VideosNav />
        <MainVideo />
      </body>
    </div>
  );
}

export default App;

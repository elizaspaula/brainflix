import React from "react";
import "./App.css";
import VideosNav from "./components/VideosNav/VideosNav";
import "./components/AppVideos/AppVideos.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import Upload from "./pages/Upload/Upload";

function App() {
  return (
    <Router>
      <div className="App">
        <VideosNav />
        <Switch>
          <Route path="/video" exact component={Video} />
          <Route path="/video/upload" exact component={Upload} />
          <Route path="/video/:videoId" component={Video} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

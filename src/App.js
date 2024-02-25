import { Route, Routes } from "react-router-dom";
import "./App.css";
import Videoplayer from "./Videoplayer";
import VideoList from "./VideoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <ReactPlayer
            url="https://youtube.com/shorts/YN76Wa4GO_Y?si=EnlcaYXp-7UujYQz"
            controls={true}
            width="640px"
            height="360px"
          /> */}
        </div>
        <Routes>
          <Route path="/" Component={VideoList} />
          <Route path="/videos/:id" Component={Videoplayer} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

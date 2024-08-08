import video from './assets/video.mp4';
import deleteVideo from './assets/delete.mp4';
import './App.css';

function App() {
  return (
    <>
      <div>
        <video autoPlay loop muted width="500" height="500">
          <source src={video} type="video/mp4" />
        </video>

        <video controls width="500" height="750">
          <source src={deleteVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;

import video from './assets/video.mp4';
import deleteVideo from './assets/delete.mp4';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="root">
        <div className="phone">
          <Header />

          <video className="video" autoPlay loop muted width="200" height="200">
            <source src={video} type="video/mp4" />
          </video>

          <Footer />
        </div>

        <video controls width="500" height="750">
          <source src={deleteVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;

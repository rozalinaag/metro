import video from './assets/video.mp4';
import deleteVideo from './assets/delete.mp4';
import css from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

function App() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.guess();
  dayjs.tz.setDefault('America/New_York');

  let nowTime = dayjs();
  console.log(nowTime);

  const [date, setDate] = useState(new Date().getSeconds());
  const dateRef = useRef(new Date().getSeconds());

  useEffect(() => {
    const animation = () => {
      const seconds = dateRef.current;
      const current_seconds = new Date().getSeconds();

      if (seconds !== current_seconds) {
        dateRef.current = current_seconds;
        setDate(current_seconds);
      }

      window.requestAnimationFrame(animation);
    };

    window.requestAnimationFrame(animation);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <div className={css.root}>
      <div className={css.phone}>
        <Header />

        <video
          className={css.video}
          autoPlay
          loop
          muted
          width="200"
          height="200"
        >
          <source src={video} type="video/mp4" />
        </video>
        {nowTime.format('HH:MM:')}
        {date}
        <Footer />
      </div>

      <video controls width="500" height="750">
        <source src={deleteVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import videoSrc from '../media/celebrate.mp4'
import imgSrc from '../media/splash img.jpeg'

import './LandingPage.css'

function LandingPage() {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('splash').classList.add('opacity-0')
    }, 4000);

    setTimeout(() => {
      document.getElementById('splash').classList.add('hidden')
    }, 5000);
  }, []);

  return (
    <div className='confetti-wrapper'>
      <div>
        <div id="splash" className="w-screen h-screen flex items-center justify-center overscroll-none m-0 p-0 absolute duration-1000">
          <video autoPlay muted loop id="myVideo" className='absolute z-0'>
            <source src={videoSrc} type='video/mp4' />
          </video>
          <img src={imgSrc} className='z-10 h-[48rem] lg:h-[36rem] rounded-xl animate-none'></img>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
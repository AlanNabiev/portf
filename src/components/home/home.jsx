import './home.css';
import img from '../props/img2.png';
import { BsMouse } from 'react-icons/bs';
import {GiClick} from 'react-icons/gi'

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
        <div className="click">
        Touch
        <GiClick  />
        </div>
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

    </div>
  );
}

export default Home;

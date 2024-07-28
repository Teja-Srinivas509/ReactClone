import React from 'react';
import { useLocation} from 'react-router-dom';
import '../LandingPage/LandingPage.css';
import NavBar from '../../Components/LandingPagecomponents/NavBar/NavBar';
import banner from '../../assets/onepiece.jpg';
import banner2 from '../../assets/banner2.webp';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';
import banner5 from '../../assets/banner5.webp';
import title from '../../assets/title.webp';
import title2 from '../../assets/title2.webp';
import title3 from '../../assets/friends_title.png';
import title4 from '../../assets/title4.webp';
import title5 from '../../assets/title5.webp';
import play from '../../assets/play.png';
import moreInfo from '../../assets/moreInfo.png';
import Cards from '../../Components/LandingPagecomponents/Cards/Cards';
import Footer from '../../Components/LandingPagecomponents/Footer1/Footer1';

function LandingPage() {
  const location = useLocation();
  const { profiles, profile } = location.state;
  const content = {
    1: {
      banner: banner,
      title: title,
      description: 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha\'s shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 108 tankōbon volumes as of March 2024. ',
    },
    2: {
      banner: banner2,
      title: title2,
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    },
    3: {
      banner: banner3,
      title: title3,
      description: 'This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.'
    },
    4: {
      banner: banner4,
      title: title4,
      description: 'Si Tu Mo (Xing Fei), an accounting student near graduation, who wants to enter an advertising company, is unsure about her future plans.'
    },
    5: {
      banner: banner5,
      title: title5,
      description: 'Talented but laid-back detective Jake Peralta and his dysfunctional peers struggle to get along under their precinct\'s strict new captain.'
    }
  };

  const currentContent = content[profile.id] || content[1];

  return (
    <div className='LandingPage'>
      <NavBar profiles={profiles} profile={profile} />
      <div className='banner'>
        <img src={currentContent.banner} alt='banner' className='banner-img' />
        <div className='banner-caption'>
          <img src={currentContent.title} className='caption-img' alt='title'/>
          <p>{currentContent.description}</p>
          <div className='banner-btn'>
            <button className='btn'><img src={play} alt='play' />Play</button>
            <button className='btn' id='dark'><img src={moreInfo} alt='more info' />More Info</button>
          </div>
        </div>
      </div>
      <div className='More'>
        <Cards title={"Now Playing"} category={"now_playing"} profiles={profiles} profile={profile} />
        <Cards title={"Top Rated"} category={"popular"} profiles={profiles} profile={profile} />
        <Cards title={"Popular"} category={"upcoming"} profiles={profiles} profile={profile} />
        <Cards title={"Up Coming"} category={"top_rated"} profiles={profiles} profile={profile} />
        <Cards title={"Dramady"} profiles={profiles} profile={profile} />
        <Cards title={"Anime"} profiles={profiles} profile={profile} />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

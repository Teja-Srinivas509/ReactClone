import React from 'react';
import { useTranslation } from 'react-i18next';
import './Features.css';
import feature1 from '../../../assets/pic1.png';
import feature2 from '../../../assets/pic2.jpg';
import feature3 from '../../../assets/pic3.png';
import feature4 from '../../../assets/pic4.png';
import poster from '../../../assets/friends.jpg';
import vid from '../../../assets/vid.mp4';

function Features() {
  const { t } = useTranslation('features');

  return (
    <div className='Features'>
      <hr></hr>
      <div className='row'>
        <div className='text-col'>
            <h2>{t('feature1-title')}</h2>
            <p>{t('feature1-description')}</p>
        </div>
        <div className='img-col'>
            <img src={feature1} alt={t('feature1-title')} />
            <img className='poster' src={poster} alt="Poster"/>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='text-col'>
            <h2>{t('feature2-title')}</h2>
            <p>{t('feature2-description')}</p>
        </div>
        <div className='img-col'>
            <img src={feature2} alt={t('feature2-title')} />
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='text-col'>
            <h2>{t('feature3-title')}</h2>
            <p>{t('feature3-description')}</p>
        </div>
        <div className='img-col'>
            <img src={feature3} alt={t('feature3-title')} />
            <video playsInline autoPlay muted loop>
                <source src={vid} type="video/mp4" />
            </video>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='text-col'>
            <h2>{t('feature4-title')}</h2>
            <p>{t('feature4-description')}</p>
        </div>
        <div className='img-col'>
            <img src={feature4} alt={t('feature4-title')} />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Features;

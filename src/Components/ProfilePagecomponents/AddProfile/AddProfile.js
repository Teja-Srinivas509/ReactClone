import React, {useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../AddProfile/AddProfile.css';
import avatar1 from '../../../assets/avatar1.png';
import avatar2 from '../../../assets/avatar2.png';
import avatar3 from '../../../assets/avatar3.png';
import avatar4 from '../../../assets/avatar4.png';
import avatar5 from '../../../assets/avatar5.png';
import avatar6 from '../../../assets/avatar6.png';
import avatar7 from '../../../assets/avatar7.png';
function AddProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { profiles } = location.state || {}; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profileName, setProfileName] = useState('');
  const [image, setImage] = useState(avatar1); 

  const profilePickers = [
    { src: avatar1, alt: 'Avatar 1' },
    { src: avatar2, alt: 'Avatar 2' },
    { src: avatar3, alt: 'Avatar 3' },
    { src: avatar4, alt: 'Avatar 4' },
    { src: avatar5, alt: 'Avatar 5' },
    { src: avatar6, alt: 'Avatar 6' },
    { src: avatar7, alt: 'Avatar 7' },
  ];
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profilePickers.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + profilePickers.length) % profilePickers.length);
  };

  const handleImageSelect = (newImage) => {
    setImage(newImage);
  };

  const handleSave = () => {
    const newProfile = {
      id: Date.now(), 
      name: profileName,
      avatar: image,
    };
    navigate('/profile', {
      state: { profiles: [...profiles, newProfile] },
    });
  };
  return (
    <div className='AddProfile'>
      <h1>Add New Profile</h1>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevImage}>◀</button>
        <div className="image-selection" style={{ transform: `translateX(-${currentIndex * 110}px)` }}>
          {profilePickers.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageSelect(image.src)}
            />
          ))}
        </div>
        <button className="carousel-button next" onClick={nextImage}>▶</button>
      </div>
      <form>
        <input
          type='text'
          placeholder='Profile Name'
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
          
        />
        <button className='AddProfileSave ' onClick={handleSave}>Save</button>
      </form>
      
    </div>
  );
}

export default AddProfile;

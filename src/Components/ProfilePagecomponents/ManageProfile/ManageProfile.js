import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../ManageProfile/ManageProfile.css';
import editimg from '../../../assets/edit.jpg';
import avatar1 from '../../../assets/avatar1.png';
import avatar2 from '../../../assets/avatar2.png';
import avatar3 from '../../../assets/avatar3.png';
import avatar4 from '../../../assets/avatar4.png';
import avatar5 from '../../../assets/avatar5.png';
import avatar6 from '../../../assets/avatar6.png';
import avatar7 from '../../../assets/avatar7.png';

function ManageProfile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, profiles } = location.state;
  const [edit, setEdit] = useState(true);
  const [image, setImage] = useState(profile.avatar);
  const [profileName, setProfileName] = useState(profile.name);

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

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleImageSelect = (newImage) => {
    setImage(newImage);
    setEdit(true);
  };

  const handleSave = () => {
    const updatedProfile = { id: profile.id, avatar: image, name: profileName };
    const updatedProfiles = profiles.map(p => p.id === profile.id ? updatedProfile : p);

    navigate('/profile', {
      state: { profiles: updatedProfiles },
    });
  };
  

  const handleCancel = () => {
    navigate('/profile', {
      state: { profiles }, 
    });
  };

  const handleDelete = () => {
    const deletedProfiles = profiles.filter(p => p.id !== profile.id);
    
    navigate('/profile', {
      state: { profiles: deletedProfiles },
    });
  };
  useEffect(() => {
    console.log('Location state in ManageProfile:', location.state);
  }, [location]);

  return (
    <div className='ManageProfile'>
      <h1>Edit Profile</h1>
      {edit ? (
        <>
          <div className='edit-cont'>
            <div className='edit-info'>
              <img src={image} alt='avatar' />
              <img className='edit-img' onClick={handleEdit} src={editimg} alt='edit' />
              <form>
                <input
                  type='text'
                  placeholder='Name'
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                />
              </form>
            </div>
            <div className='edit-maturity'>
              <h2>Maturity Settings:</h2>
              <p className='para'>All Maturity Ratings</p>
              <p>
                Show titles of all <strong>maturity ratings</strong> for this profile.
              </p>
            </div>
            <div className='edit-controls'>
              <h2>Autoplay controls:</h2>
              <input type='checkbox' />
              &nbsp;&nbsp;Autoplay next episode in a series on all devices.
              <br />
              <input type='checkbox' />
              &nbsp;&nbsp;Autoplay previews while browsing on all devices.
            </div>
            <div className='edit-buttons'>
              <button onClick={handleSave} className='save'>Save</button>
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleDelete}>Delete Profile</button>
            </div>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default ManageProfile;

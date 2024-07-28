import React, { useState, useEffect } from 'react';
import '../ProfilePage/Profile.css';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';
import avatar5 from '../../assets/avatar5.png'
import addProfile from '../../assets/addProfile.png';
import { useLocation, useNavigate} from 'react-router-dom';

function Profile() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const location = useLocation();
  const navigate = useNavigate();

  let [profiles, setProfiles] = useState([
    { id: 1, avatar: avatar1, name: 'Guru' },
    { id: 2, avatar: avatar2, name: 'Teja' },
    { id: 3, avatar: avatar3, name: 'Banti' },
    { id: 4, avatar: avatar4, name: 'Senpai' },
    {id:5, avatar:avatar5,name:"Uday"}
  ]);
  
  const handleAddProfile = () => {
    if (profiles.length >= 5) {
      alert('You cannot add more than 5 profiles.');
      return;
    }
    navigate('/add-profile', { state: { profiles } });
  };
  const handleEditing = (profile) => {
    navigate('/manage-profiles', { state: { profile, profiles } });
  };
 const handleMoving = (profile) =>{
  navigate('/landing-page', { state: { profile, profiles } });
 }
  useEffect(() => {
    if (location.state) {
      if (location.state.newProfile) {
        if (profiles.length < 5) {
          setProfiles(prevProfiles => [...prevProfiles, location.state.newProfile]);
        } else {
          alert('You cannot add more than 5 profiles.');
        }
      } else if (location.state.profiles) {
        setProfiles(location.state.profiles);
      } else if (location.state.deletedProfiles) {
        setProfiles(location.state.deletedProfiles);
      }
    }
  }, [location.state,profiles.length]);

  const renderProfile = (profile) => (
    <div className='profile-div' key={profile.id}>
      <div className='profile-img'>
        <img className={show ? 'edit-mode' : ''} src={profile.avatar} alt='avatar1' onClick={()=>handleMoving(profile)} />
        <svg className={show ? 'show' : ''} onClick={() => handleEditing(profile)} xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" >
          <path fillRule="evenodd" clipRule="evenodd" d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z" fill="currentColor"></path>
        </svg>
        <p>{profile.name}</p>
      </div>
    </div>
  );
  
  useEffect(() => {
    console.log("Location state in Profile:", location);
  }, [location]);

  return (
    <div className='Profile'>
      <h1>Who's Watching?</h1>
      <div className='profile-container'>
        {profiles.map(profile => renderProfile(profile))}
        <div className='profile-div'>
          <div className='profile-img'>
          <img src={addProfile} alt='avatar1' className='addProfile' onClick={handleAddProfile} /> 
                     <p>Add Profile</p>
          </div>
        </div>
      </div>
      <div className='manage'>
        <span onClick={handleShow}>{show ? 'Done' : 'Manage Profiles'}</span>
      </div>
    </div>
  );
}

export default Profile;
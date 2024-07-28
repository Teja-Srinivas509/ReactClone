import React, { useState, useEffect, useRef } from 'react';
import '../NavBar/NavBar.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import logo from '../../../assets/logo - Copy.png';
import search from '../../../assets/search.svg';
import bell from '../../../assets/bell.svg';
import profileimg from '../../../assets/profile.png'; 
import dropdown from '../../../assets/dropdown.svg';
import { Link } from 'react-router-dom';


function NavBar({ profiles, profile }) {
    const navRef = useRef();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [shortBar, setShortBar] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(profile);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                if (window.scrollY >= 80) {
                    navRef.current.classList.add('nav-dark');
                } else {
                    navRef.current.classList.remove('nav-dark');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleFocusLeave = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOnClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropDown = () => {
        setShortBar(!shortBar);
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Signed out successfully');
                navigate('/login');
            })
            .catch((error) => {
                console.error('Sign out error:', error);
            });
    };

    const handleProfileClick = (profile) => {
        setSelectedProfile(profile);
        setIsDropdownOpen(false);
        navigate('/landing-page', { state: { profiles,profile } });
      
    };
    const handleManageProfile = ()=>{
        navigate('/profile')
    }

    return (
        <div className='navbar' ref={navRef}>
            <div className='navbar-left'>
                <img src={logo} className='logo' alt="logo" />
                <div className='shortbar' onClick={handleDropDown}>
                    <p>Browse</p>
                    <img src={dropdown} alt="dropdown" />
                    {shortBar && (
                        <div className='shortbar-menu'>
                            <ul className='shortbar-item'>
                                <li><Link to="/landing-page" state={
                                    {profiles,profile}
                                }>Home</Link></li>
                                <li><Link to="/tv-shows">TV Shows</Link></li>
                                <li><Link to="/movies">Movies</Link></li>
                                <li><Link to="/new-popular">New & Popular</Link></li>
                                <li><Link to="/my-list">My List</Link></li>
                                <li><Link to="/browse-languages">Browse by Languages</Link></li>
                            </ul>
                        </div>
                    )}
                </div>

                <ul className='navbar-menu'>
                    <li><Link to="/landing-page" state ={
                        {profiles,profile}
                    }>Home</Link></li>
                    <li><Link to="/tv-shows">TV Shows</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/new-popular">New & Popular</Link></li>
                    <li><Link to="/my-list">My List</Link></li>
                    <li><Link to="/browse-languages">Browse by Languages</Link></li>
                </ul>
            </div>
            <div className='navbar-right'>
                <img src={search} className='icons' alt="search" />
                <p>Children</p>
                <img src={bell} className='icons' alt="bell" />
                <div
                    className='navbar-profile'
                    onFocus={handleFocusLeave}
                    onClick={handleOnClick}
                >
                    <img src={selectedProfile.avatar || profileimg} className='profile' alt="profile" />
                    <img src={dropdown} alt="dropdown" />
                    {isDropdownOpen && (
                        <div className='dropdown-menu' ref={dropdownRef}>
                            {profiles.map((p) => (
                                <div key={p.id} className='dropdown-item' onClick={() => handleProfileClick(p)}>
                                    <img src={p.avatar} alt={p.name} className='dropdown-avatar' />
                                    <span>{p.name}</span>
                                </div>
                            ))}
                            <div className='dropdown-item'>
                            <svg className='Mprofile' onClick={handleManageProfile} xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="PencilStandard" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z" fill="currentColor"></path></svg><span onClick={handleManageProfile}>Manage Profile</span>
                            </div>
                            <div className='dropdown-item' onClick={handleSignOut}>
                                <span>Sign Out</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    );
}

export default NavBar;

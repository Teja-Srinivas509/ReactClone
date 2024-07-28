import './App.css';
import Homepage from './Pages/HomePage/Homepage';
import Login from '../src/Pages/LoginPage/Login'
import {Route,Routes} from 'react-router-dom'
import Profile from './Pages/ProfilePage/Profile'
import ManageProfile from './Components/ProfilePagecomponents/ManageProfile/ManageProfile';
import AddProfile from './Components/ProfilePagecomponents/AddProfile/AddProfile';
import LandingPage from './Pages/LandingPage/LandingPage';
import Player from './Pages/Player/Player';

function App() {

  return (
    <div className="App">
     <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/" element={<Homepage />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/manage-profiles" element={<ManageProfile />} />
     <Route path="/add-profile" element={<AddProfile />} />
     <Route path="/landing-page" element={<LandingPage />} />
     <Route path="/player" element={<Player/>}/>
     </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo - Copy.png';
import CustomDropDown from '../../Components/HomePageComponents/CustomDropDown/CustomDropDown';
import { useTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';

function Login() {
  const location = useLocation();
  const { t } = useTranslation('login');
  const emailValue = location.state?.email || '';
  const [sign, setSign] = useState("Sign In");
  const [email, setEmail] = useState(emailValue);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const setSignUp = () => {
    setSign("Sign Up");
  };

  const setSignIn = () => {
    setSign("Sign In");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
        });
      }
      setLoading(false);
      navigate('/profile');
    } catch (error) {
      console.log("Error:", error.message);
      alert("Sign up failed: " + error.message);
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/profile');
    } catch (error) {
      console.log("Error:", error.message);
      alert("Sign in failed: " + error.message);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sign === "Sign Up") {
      handleSignUp(e);
    } else {
      handleSignIn(e);
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" className="logo" />
      <div className='login-form'>
        <h1>{sign === "Sign In" ? t('login-signin') : t('login-signup')}</h1>
        <form onSubmit={handleSubmit}>
          {sign === "Sign Up" && 
            <input type="text" placeholder={t('login-name')} name="name" required value={name} onChange={(e) => setName(e.target.value)} />}
          <input type="email" placeholder={t('login-email')} name='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder={t('login-password')} name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className="btn" disabled={loading}>
            {loading ? <Spinner /> : (sign === "Sign In" ? t('login-signin') : t('login-signup'))}
          </button>
          <div className='help'>
            <div className='remember'>
              <input type="checkbox" />
              <label>{t('login-remember')}</label>
            </div>
            <p>{t('login-needHelp')}</p>
          </div>
        </form>
        <div className='switch'>
          {sign === "Sign In" ? 
            <p>{t('login-new')} <span onClick={setSignUp}>{t('login-signupNow')}</span></p> 
            : <p>{t('login-already')} <span onClick={setSignIn}>{t('login-signinNow')}</span></p>}
        </div>
      </div>
      <CustomDropDown />
    </div>
  );
}

export default Login;

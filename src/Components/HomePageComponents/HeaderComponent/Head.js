import React, { useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import './Head.css';
import {useNavigate } from 'react-router-dom';

function Head() {
  const { t } = useTranslation('header');
  const [email, setEmail] = useState(' ');
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const handleChange = (e) => {
    startTransition(() => {
      setEmail(e.target.value);
    });
  };

  const handleSubmit = () => {
    startTransition(() => {
      navigate('/login', { state: { email } });
    });
  };

  return (
    <div className='Head'>
      <div className="header-content">
        <h1>{t("header-content-h1")}</h1>
        <h3>{t("header-content-h3")}</h3>
        <p>{t("header-content-p")}</p>
        <form>
          <input type="email" placeholder={t('header-content-placeholder')} value={email} onChange={handleChange} />
          <button type="button" onClick={handleSubmit}>{t("header-content-btn")}</button>
        </form>
      </div>
    </div>
  );
}

export default Head;

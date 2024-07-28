import React from 'react';
import { useTranslation } from 'react-i18next';
import '../CustomDropDown/CustomDropDown.css';

function CustomDropDown() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    console.log(selectedLanguage)
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className='CustomDropDown'>
      <div className='lang'>
        <i className="fa-solid fa-globe"></i>
        <select className="btn-lan" onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option lang="en" label="English" value="en">English</option>
          <option lang="pt" label="Português" value="pt">Português</option>
          <option lang="hi" label="Hindi" value="hi">Hindi</option>
          <option lang="te" label="Telugu" value="te">Telugu</option>
        </select>
      </div>
    </div>
  );
}

export default CustomDropDown;

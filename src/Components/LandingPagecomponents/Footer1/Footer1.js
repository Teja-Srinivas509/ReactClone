import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Footer1/Footer1.css';

function Footer1() {
  const { t } = useTranslation('footer');

  return (
    <div className='Footer1'>
      <h1>Questions? call 000-800-919-1694</h1>
      <ul className="footer-links">
        <li>{t('faq')}</li>
        <li>{t('investor-relations')}</li>
        <li>{t('privacy')}</li>
        <li>{t('speed-test')}</li>
        <li>{t('help-centre')}</li>
        <li>{t('jobs')}</li>
        <li>{t('cookie-preferences')}</li>
        <li>{t('legal-notices')}</li>
        <li>{t('account')}</li>
        <li>{t('ways-to-watch')}</li>
        <li>{t('corporate-information')}</li>
        <li>{t('only-on-netflix')}</li>
        <li>{t('media-centre')}</li>
        <li>{t('terms-of-use')}</li>
        <li>{t('contact-us')}</li>
      </ul>
    </div>
  );
}

export default Footer1;

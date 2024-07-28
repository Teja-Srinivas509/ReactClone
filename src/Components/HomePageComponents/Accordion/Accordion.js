import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../Accordion/Accordion.css';
import { Link } from 'react-router-dom';

function Accordion() {
  const { t } = useTranslation('accordion');

  const data = [
    {
      id: 1,
      question: t('question1'),
      answer: t('answer1'),
    },
    {
      id: 2,
      question: t('question2'),
      answer: t('answer2'),
    },
    {
      id: 3,
      question: t('question3'),
      answer: t('answer3'),
    },
    {
      id: 4,
      question: t('question4'),
      answer: t('answer4'),
    },
    {
      id: 5,
      question: t('question5'),
      answer: t('answer5'),
    },
    {
      id: 6,
      question: t('question6'),
      answer: t('answer6'),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='Accordion'>
      <h1>{t('faq-title')}</h1>
      {data.map((item, index) => (
        <div className='accordion-item' key={item.id}>
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h2>{item.question}</h2>
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
      <p>{t('ready-to-watch')}</p>
      <form>
        <input type="email" placeholder={t('email-placeholder')} />
        <Link to = '/login'><button>{t('get-started')}</button></Link>
      </form>
      <br />
      <hr />
    </div>
  );
}

export default Accordion;

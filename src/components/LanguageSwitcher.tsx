import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button variant="outline-primary" size="sm" onClick={toggleLanguage}>
      🌐 {i18n.language === 'en' ? 'Hindi' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;

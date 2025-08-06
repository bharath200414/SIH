import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const translations: Record<string, any> = {
  en: {
    welcome: "Welcome to AI LearnMate",
    explore: "📚 Explore Subjects",
    tutors: "👩‍🏫 Smart Tutors",
    progress: "📈 Track Progress",
    downloads: "⬇️ Downloads",
    feedback: "💬 Feedback",
    quiz: "🧠 Take a Quiz",
    login: "🔐 Login",
    signup: "📝 Signup",
    notFound: "🚫 Test NotFound",
    tagline: "Empowering learners with technology — Explore. Learn. Grow.",
  },
  hi: {
    welcome: "एआई लर्नमेट में आपका स्वागत है",
    explore: "📚 विषयों का अन्वेषण करें",
    tutors: "👩‍🏫 स्मार्ट शिक्षक",
    progress: "📈 प्रगति ट्रैक करें",
    downloads: "⬇️ डाउनलोड्स",
    feedback: "💬 प्रतिक्रिया",
    quiz: "🧠 क्विज लें",
    login: "🔐 लॉगिन",
    signup: "📝 साइनअप",
    notFound: "🚫 पृष्ठ नहीं मिला",
    tagline: "प्रौद्योगिकी से सीखने को सशक्त बनाना — अन्वेषण करें, सीखें, बढ़ें।",
  },
  ta: {
    welcome: "AI LearnMate இற்கு வரவேற்கின்றோம்",
    explore: "📚 பாடங்களை ஆராயுங்கள்",
    tutors: "👩‍🏫 புத்திசாலி ஆசிரியர்கள்",
    progress: "📈 முன்னேற்றத்தை கண்காணிக்கவும்",
    downloads: "⬇️ பதிவிறக்கங்கள்",
    feedback: "💬 கருத்து",
    quiz: "🧠 வினாடிவினா எடுத்துக்கொள்ளுங்கள்",
    login: "🔐 உள்நுழை",
    signup: "📝 பதிவு செய்",
    notFound: "🚫 பக்கம் கிடைக்கவில்லை",
    tagline: "தொழில்நுட்பத்துடன் கற்றலை வலுப்படுத்துங்கள் — ஆராயுங்கள், கற்றுக்கொள்ளுங்கள், வளருங்கள்.",
  },
};

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState<number>(16);
  const [language, setLanguage] = useState<'en' | 'hi' | 'ta'>('en');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const t = translations[language];

  return (
    <div className={`homepage-container ${theme}`} style={{ fontSize: `${fontSize}px` }}>
      <div className="top-controls d-flex justify-content-between align-items-center px-3 pt-3">
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-secondary" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
          <button className="btn btn-sm btn-outline-secondary" onClick={() => setFontSize((f) => Math.min(f + 2, 24))}>A+</button>
          <button className="btn btn-sm btn-outline-secondary" onClick={() => setFontSize((f) => Math.max(f - 2, 12))}>A−</button>
        </div>
        <div>
          <select className="form-select form-select-sm" style={{ width: 140 }} value={language} onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'ta')}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>
      </div>

      <div className="text-center px-3">
        <h1 className="display-5 fw-bold mb-4 text-gradient" data-aos="fade-down">{t.welcome}</h1>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4" data-aos="zoom-in">
          <Link to="/login" className="btn btn-outline-primary btn-lg shadow-sm">{t.login}</Link>
          <Link to="/signup" className="btn btn-outline-success btn-lg shadow-sm">{t.signup}</Link>
          <Link to="/subjects" className="btn btn-outline-primary btn-lg shadow-sm">{t.explore}</Link>
          <Link to="/tutors" className="btn btn-outline-warning btn-lg shadow-sm">{t.tutors}</Link>
          <Link to="/progress" className="btn btn-outline-success btn-lg shadow-sm">{t.progress}</Link>
          <Link to="/downloads" className="btn btn-outline-info btn-lg shadow-sm">{t.downloads}</Link>
          <Link to="/feedback" className="btn btn-outline-dark btn-lg shadow-sm">{t.feedback}</Link>
          <Link to="/quiz" className="btn btn-outline-danger btn-lg shadow-sm">{t.quiz}</Link>
          <Link to="/404" className="btn btn-outline-secondary btn-lg shadow-sm">{t.notFound}</Link>
        </div>

        <p className="text-muted small" data-aos="fade-in">{t.tagline}</p>
      </div>
    </div>
  );
};

export default HomePage;

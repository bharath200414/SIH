import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Book,
  PersonCheck,
  BarChartLine,
  Download,
  ChatSquareDots,
  PatchQuestion,
  BoxArrowInRight,
  PencilSquare,
  ExclamationTriangle,
  People,
} from "react-bootstrap-icons";

const translations: Record<string, any> = {
  en: {
    welcome: "Welcome to AI LearnMate",
    tagline: "Empowering learners with technology — Explore. Learn. Grow.",
    login: "Login",
    signup: "Signup",
    explore: "Explore Subjects",
    tutors: "Smart Tutors",
    progress: "Track Progress",
    downloads: "Downloads",
    feedback: "Feedback",
    quiz: "Take a Quiz",
    notFound: "Test NotFound",
  },
  hi: {
    welcome: "एआई लर्नमेट में आपका स्वागत है",
    tagline: "प्रौद्योगिकी से सीखने को सशक्त बनाना — अन्वेषण करें, सीखें, बढ़ें।",
    login: "लॉगिन",
    signup: "साइनअप",
    explore: "विषयों का अन्वेषण",
    tutors: "स्मार्ट शिक्षक",
    progress: "प्रगति ट्रैक करें",
    downloads: "डाउनलोड्स",
    feedback: "प्रतिक्रिया",
    quiz: "क्विज लें",
    notFound: "पृष्ठ नहीं मिला",
  },
  ta: {
    welcome: "AI LearnMate இற்கு வரவேற்கின்றோம்",
    tagline: "தொழில்நுட்பத்துடன் கற்றலை வலுப்படுத்துங்கள் — ஆராயுங்கள், கற்றுக்கொள்ளுங்கள், வளருங்கள்.",
    login: "உள்நுழை",
    signup: "பதிவு செய்",
    explore: "பாடங்களை ஆராயுங்கள்",
    tutors: "புத்திசாலி ஆசிரியர்கள்",
    progress: "முன்னேற்றத்தை கண்காணிக்கவும்",
    downloads: "பதிவிறக்கங்கள்",
    feedback: "கருத்து",
    quiz: "வினாடிவினா எடுத்துக்கொள்ளுங்கள்",
    notFound: "பக்கம் கிடைக்கவில்லை",
  },
  te: {
    welcome: "AI LearnMate కి స్వాగతం",
    tagline: "సాంకేతికతతో నేర్చుకోవడాన్ని శక్తివంతం చేయడం — అన్వేషించండి. నేర్చుకోండి. అభివృద్ధి చెందండి.",
    login: "లాగిన్",
    signup: "సైన్ అప్",
    explore: "విషయాలను అన్వేషించండి",
    tutors: "స్మార్ట్ టీచర్లు",
    progress: "పురోగతిని ట్రాక్ చేయండి",
    downloads: "డౌన్‌లోడ్లు",
    feedback: "ఫీడ్‌బ్యాక్",
    quiz: "క్విజ్ తీసుకోండి",
    notFound: "పేజీ దొరకలేదు",
  },
};

const features = (t: any) => [
  { icon: <BoxArrowInRight size={24} />, text: t.login, link: "/login", color: "primary" },
  { icon: <PencilSquare size={24} />, text: t.signup, link: "/signup", color: "success" },
  { icon: <Book size={24} />, text: t.explore, link: "/subjects", color: "info" },
  { icon: <People size={24} />, text: t.tutors, link: "/tutors", color: "warning" },
  { icon: <BarChartLine size={24} />, text: t.progress, link: "/progress", color: "secondary" },
  { icon: <Download size={24} />, text: t.downloads, link: "/downloads", color: "danger" },
  { icon: <ChatSquareDots size={24} />, text: t.feedback, link: "/feedback", color: "dark" },
  { icon: <PatchQuestion size={24} />, text: t.quiz, link: "/quiz", color: "success" },
  { icon: <ExclamationTriangle size={24} />, text: t.notFound, link: "/404", color: "secondary" },
];

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fontSize, setFontSize] = useState<number>(16);
  const [language, setLanguage] = useState<"en" | "hi" | "ta" | "te">("en");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const t = translations[language];

  return (
    <div className={`homepage-container ${theme}`} style={{ fontSize: `${fontSize}px` }}>
      {/* Sidebar */}
      <div className="sidebar">
        {features(t).map((f, idx) => (
          <Link
            key={idx}
            to={f.link}
            className={`sidebar-btn text-${f.color}`}
            data-aos="fade-right"
          >
            {f.icon}
            <span className="ms-2">{f.text}</span>
          </Link>
        ))}
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Controls */}
        <div className="d-flex justify-content-end align-items-center px-3 pt-3 gap-2">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setFontSize((f) => Math.min(f + 2, 24))}
          >
            A+
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setFontSize((f) => Math.max(f - 2, 12))}
          >
            A−
          </button>
          <select
            className="form-select form-select-sm"
            style={{ width: 140 }}
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
          </select>
        </div>

        {/* Hero */}
        <div className="text-center mt-4" data-aos="fade-down">
          <h1 className="display-5 fw-bold text-gradient">{t.welcome}</h1>
          <p className="text-muted">{t.tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

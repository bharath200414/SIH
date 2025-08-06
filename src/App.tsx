import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SubjectsPage from './pages/Subjects';
import TutorsPage from './pages/Tutor';
import FeedbackPage from './pages/Feedback';
import Progress from './pages/Progress';
import Downloads from './pages/Downloads';
import QuizPage from './pages/Quiz'; 
import NotFound from './pages/NotFound';
const App: React.FC = () => {
return (
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/subjects" element={<SubjectsPage />} />
<Route path="/tutors" element={<TutorsPage />} />
<Route path="/feedback" element={<FeedbackPage />} />
<Route path="/progress" element={<Progress />} />
<Route path="/downloads" element={<Downloads />} />
<Route path="/quiz" element={<QuizPage />} />
 <Route path="*" element={<NotFound />} />
</Routes>
);
};
export default App;
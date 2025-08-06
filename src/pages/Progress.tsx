import React, { useState } from 'react';
import {
  BookOpen, Calculator, Beaker, Globe, Star,
  TrendingUp, Award, Clock
} from 'lucide-react';

import './ProgressPage.css';

interface Subject {
  id: string;
  name: string;
  nativeName: string;
  icon: React.ComponentType<{ className?: string }>;
  progress: number;
  status: 'excellent' | 'good' | 'needs-improvement' | 'struggling';
  completedLessons: number;
  totalLessons: number;
  timeSpent: number;
  lastAccessed: string;
  achievements: string[];
}

interface StudentStats {
  totalTimeSpent: number;
  averageProgress: number;
  completedSubjects: number;
  totalAchievements: number;
}

const mockSubjects: Subject[] = [
  {
    id: '1',
    name: 'Mathematics',
    nativeName: 'गणित',
    icon: Calculator,
    progress: 85,
    status: 'excellent',
    completedLessons: 17,
    totalLessons: 20,
    timeSpent: 245,
    lastAccessed: '2 hours ago',
    achievements: ['Problem Solver', 'Quick Learner']
  },
  {
    id: '2',
    name: 'Science',
    nativeName: 'विज्ञान',
    icon: Beaker,
    progress: 72,
    status: 'good',
    completedLessons: 14,
    totalLessons: 20,
    timeSpent: 189,
    lastAccessed: '1 day ago',
    achievements: ['Curious Mind']
  },
  {
    id: '3',
    name: 'Language Arts',
    nativeName: 'भाषा कला',
    icon: BookOpen,
    progress: 45,
    status: 'needs-improvement',
    completedLessons: 9,
    totalLessons: 20,
    timeSpent: 123,
    lastAccessed: '3 days ago',
    achievements: []
  },
  {
    id: '4',
    name: 'Social Studies',
    nativeName: 'सामाजिक अध्ययन',
    icon: Globe,
    progress: 28,
    status: 'struggling',
    completedLessons: 5,
    totalLessons: 18,
    timeSpent: 67,
    lastAccessed: '1 week ago',
    achievements: []
  }
];

const mockStats: StudentStats = {
  totalTimeSpent: 624,
  averageProgress: 57.5,
  completedSubjects: 0,
  totalAchievements: 3
};

const Progress: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const formatTime = (minutes: number): string => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  };

  const getProgressColorClass = (progress: number): string => {
    if (progress >= 80) return 'progress-green';
    if (progress >= 60) return 'progress-blue';
    if (progress >= 40) return 'progress-yellow';
    return 'progress-red';
  };

  return (
    <div className={`progress-page ${isDarkMode ? 'progress-dark' : 'progress-light'}`}>
      <header className="progress-header">
        <div className="container">
          <div className="header-flex">
            <div>
              <h1 className="progress-title">Learning Progress</h1>
              <p className="progress-subtitle">Track your educational journey</p>
            </div>
            <button
              className="theme-toggle-btn"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="stats-grid">
          <div className="stat-card">
            <TrendingUp className="icon-blue" />
            <div>
              <p className="stat-value">{mockStats.averageProgress.toFixed(1)}%</p>
              <p className="stat-label">Avg Progress</p>
            </div>
          </div>
          <div className="stat-card">
            <Clock className="icon-green" />
            <div>
              <p className="stat-value">{formatTime(mockStats.totalTimeSpent)}</p>
              <p className="stat-label">Time Spent</p>
            </div>
          </div>
          <div className="stat-card">
            <Award className="icon-yellow" />
            <div>
              <p className="stat-value">{mockStats.totalAchievements}</p>
              <p className="stat-label">Achievements</p>
            </div>
          </div>
          <div className="stat-card">
            <Star className="icon-purple" />
            <div>
              <p className="stat-value">{mockSubjects.length}</p>
              <p className="stat-label">Subjects</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Subject Progress</h2>
          <div className="subject-grid">
            {mockSubjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <article
                  key={subject.id}
                  className={`subject-card ${selectedSubject === subject.id ? 'active-card' : ''}`}
                  onClick={() =>
                    setSelectedSubject(selectedSubject === subject.id ? null : subject.id)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSubject(selectedSubject === subject.id ? null : subject.id);
                    }
                  }}
                >
                  <div className="subject-header">
                    <div className="subject-info">
                      <Icon className="icon-subject" />
                      <div>
                        <h3 className="subject-name">{subject.name}</h3>
                        <p className="subject-native">{subject.nativeName}</p>
                      </div>
                    </div>
                    <span className={`status-badge status-${subject.status}`}>
                      {subject.status.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  </div>

                  <div className="progress-section">
                    <div className="progress-labels">
                      <span>Progress</span>
                      <span>{subject.progress}%</span>
                    </div>
                    <div className="progress-track">
                      <div
                        className={`progress-fill ${getProgressColorClass(subject.progress)}`}
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="quick-stats">
                    <div>
                      <p className="label">Lessons</p>
                      <p>{subject.completedLessons}/{subject.totalLessons}</p>
                    </div>
                    <div>
                      <p className="label">Time Spent</p>
                      <p>{formatTime(subject.timeSpent)}</p>
                    </div>
                  </div>

                  {selectedSubject === subject.id && (
                    <div className="expanded">
                      <p className="label">Last Accessed</p>
                      <p>{subject.lastAccessed}</p>
                      {subject.achievements.length > 0 && (
                        <div className="achievements">
                          <p className="label">Achievements</p>
                          {subject.achievements.map((ach, idx) => (
                            <span key={idx} className="achievement-badge">
                              <Award className="achievement-icon" />
                              {ach}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="motivation-box">
          <h2 className="motivation-title">Keep Learning!</h2>
          <p className="motivation-text">
            Every step forward is progress. Continue your educational journey at your own pace.
          </p>
          <p className="motivation-text">आगे बढ़ते रहें, सीखते रहें! • Keep moving forward, keep learning!</p>
        </section>
      </main>
    </div>
  );
};

export default Progress;

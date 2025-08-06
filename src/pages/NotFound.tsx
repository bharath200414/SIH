import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import './NotFound.css';

const t = (key: string): string => {
const translations: { [key: string]: string } = {
'notfound.title': 'Oops! Page not found.',
'notfound.description': "The page you are looking for doesn't exist or has been moved.",
'notfound.goHome': 'Go to Home',
'notfound.altText': 'Page not found illustration',
};
return translations[key] || key;
};

const NotFound: React.FC = () => {
const handleGoHome = () => {
window.location.href = '/';
};

return (
<div className="not-found-wrapper d-flex align-items-center justify-content-center">
<div className="container text-center">
<div className="row justify-content-center">
<div className="col-12 col-md-8 col-lg-6">
<div className="card not-found-card shadow-sm">
<div className="card-body py-5 px-4">
{/* Icon */}
<div className="icon-wrapper mb-4">
<AlertTriangle size={80} className="icon-alert" aria-hidden="true" />
</div>
            {/* Robot Illustration */}
            <div className="robot-illustration mb-4" aria-label={t('notfound.altText')}>
              <svg width="120" height="120" viewBox="0 0 120 120" role="img">
                <rect x="30" y="20" width="60" height="50" rx="10" fill="#e9ecef" stroke="#6c757d" strokeWidth="2" />
                <circle cx="45" cy="40" r="5" fill="#6c757d" />
                <circle cx="75" cy="40" r="5" fill="#6c757d" />
                <path d="M 50 55 Q 60 50 70 55" stroke="#6c757d" strokeWidth="2" fill="none" />
                <line x1="60" y1="20" x2="60" y2="10" stroke="#6c757d" strokeWidth="2" />
                <circle cx="60" cy="8" r="3" fill="#dc3545" />
                <rect x="40" y="70" width="40" height="35" rx="5" fill="#e9ecef" stroke="#6c757d" strokeWidth="2" />
                <rect x="20" y="75" width="20" height="8" rx="4" fill="#e9ecef" stroke="#6c757d" strokeWidth="2" />
                <rect x="80" y="75" width="20" height="8" rx="4" fill="#e9ecef" stroke="#6c757d" strokeWidth="2" />
              </svg>
            </div>

            {/* Error Code */}
            <h1 className="display-1 fw-bold error-code">404</h1>

            {/* Message */}
            <h2 className="h4 fw-semibold text-primary mb-3">{t('notfound.title')}</h2>
            <p className="text-muted mb-4">{t('notfound.description')}</p>

            {/* Go Home Button */}
            <button
              className="btn btn-go-home btn-lg px-4 py-2 d-inline-flex align-items-center gap-2"
              onClick={handleGoHome}
              type="button"
              aria-label={t('notfound.goHome')}
            >
              <Home size={20} aria-hidden="true" />
              {t('notfound.goHome')}
            </button>

            {/* Help Message */}
            <div className="mt-4 pt-3 border-top small text-muted">
              Having trouble? Our AI Tutor is here to help students learn and grow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
};
export default NotFound;

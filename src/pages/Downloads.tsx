import React, { useState, useMemo } from 'react';
import {
  Download,
  FileText,
  Volume2,
  Play,
  Smartphone,
  Search,
  Filter,
  CheckCircle,
  Clock,
  FileDown
} from 'lucide-react';

import './DownloadsPage.css';

const mockResources = [
  {
    id: 'r1',
    title: 'Algebra Basics',
    nativeTitle: 'बीजगणित की मूल बातें',
    subject: 'math',
    resourceType: 'pdf',
    fileSize: '2MB',
    language: 'English',
    nativeLanguage: 'अंग्रेज़ी',
    description: 'A PDF covering the basics of Algebra including equations and expressions.',
    downloadUrl: '#',
    isOfflineCompatible: true,
    difficulty: 'beginner',
    lastUpdated: '2024-08-10',
    downloadCount: 1350
  },
  {
    id: 'r2',
    title: 'Introduction to Plants',
    nativeTitle: 'पौधों का परिचय',
    subject: 'science',
    resourceType: 'video',
    fileSize: '20MB',
    duration: '6:12',
    language: 'Hindi',
    nativeLanguage: 'हिंदी',
    description: 'Short video about types of plants and photosynthesis.',
    downloadUrl: '#',
    isOfflineCompatible: false,
    difficulty: 'intermediate',
    lastUpdated: '2024-07-15',
    downloadCount: 720
  }
];

const subjectFilters = [
  { id: 'all', name: 'All Subjects', nativeName: 'सभी विषय', icon: FileText, color: 'gray' },
  { id: 'math', name: 'Math', nativeName: 'गणित', icon: FileText, color: 'blue' },
  { id: 'science', name: 'Science', nativeName: 'विज्ञान', icon: FileText, color: 'green' },
  { id: 'language', name: 'Language', nativeName: 'भाषा', icon: FileText, color: 'purple' },
  { id: 'social-studies', name: 'Social Studies', nativeName: 'सामाजिक अध्ययन', icon: FileText, color: 'orange' }
];

const Downloads: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [downloadingIds, setDownloadingIds] = useState<Set<string>>(new Set());

  const filteredResources = useMemo(() => {
    return mockResources.filter((r) => {
      const subjectMatch = selectedSubject === 'all' || r.subject === selectedSubject;
      const typeMatch = selectedType === 'all' || r.resourceType === selectedType;
      const queryMatch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         r.nativeTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return subjectMatch && typeMatch && queryMatch;
    });
  }, [selectedSubject, selectedType, searchQuery]);

  const getIcon = (type: string) => {
    const icons: any = { pdf: FileText, audio: Volume2, video: Play, interactive: Smartphone };
    return icons[type] || FileText;
  };

  const handleDownload = (res: any) => {
    setDownloadingIds(prev => new Set(prev).add(res.id));
    setTimeout(() => {
      setDownloadingIds(prev => {
        const updated = new Set(prev);
        updated.delete(res.id);
        return updated;
      });
      alert(`Downloaded: ${res.title}`);
    }, 1500);
  };

  return (
    <div className={`downloads-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <div className="container">
          <div className="header-flex">
            <div>
              <h1>📚 Study Materials</h1>
              <p>Download resources for offline learning</p>
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? '🌞 Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="filters">
          <div className="search-box">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="subject-buttons">
            {subjectFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedSubject(filter.id)}
                className={`subject-btn ${selectedSubject === filter.id ? 'active' : ''}`}
              >
                <filter.icon className="icon" />
                {filter.name}
              </button>
            ))}
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="type-dropdown"
          >
            <option value="all">All Types</option>
            <option value="pdf">PDF</option>
            <option value="audio">Audio</option>
            <option value="video">Video</option>
            <option value="interactive">Interactive</option>
          </select>
        </div>

        <div className="resource-list">
          {filteredResources.length === 0 ? (
            <div className="no-results">
              <FileDown />
              <p>No resources found</p>
            </div>
          ) : (
            filteredResources.map((res) => {
              const Icon = getIcon(res.resourceType);
              const isDownloading = downloadingIds.has(res.id);

              return (
                <div key={res.id} className="resource-card">
                  <div className="header-row">
                    <Icon className="type-icon" />
                    <span className="type">{res.resourceType.toUpperCase()}</span>
                    {res.isOfflineCompatible && (
                      <span className="offline">
                        <CheckCircle size={12} /> Offline
                      </span>
                    )}
                  </div>
                  <h3>{res.title}</h3>
                  <p className="description">{res.description}</p>
                  <p className="details">Language: {res.language} • Size: {res.fileSize}</p>

                  <button
                    className="download-btn"
                    disabled={isDownloading}
                    onClick={() => handleDownload(res)}
                  >
                    {isDownloading ? (
                      <>
                        <Clock className="spin" /> Downloading...
                      </>
                    ) : (
                      <>
                        <Download /> Download
                      </>
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default Downloads;

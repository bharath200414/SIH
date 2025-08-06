import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SubjectsPage.css";

interface Subject {
name: string;
difficulty: string;
description: string;
icon: string;
}

const subjects: Subject[] = [
{
name: "Mathematics",
difficulty: "Beginner",
description: "Learn arithmetic, algebra, and geometry fundamentals.",
icon: "📐",
},
{
name: "Science",
difficulty: "Intermediate",
description: "Explore physics, chemistry, and biology.",
icon: "🔬",
},
{
name: "English",
difficulty: "Beginner to Advanced",
description: "Grammar, comprehension, writing, and vocabulary.",
icon: "📖",
},
{
name: "Social Studies",
difficulty: "Beginner to Expert",
description: "History, geography, civics, and culture.",
icon: "🌍",
},
{
name: "Computer Basics",
difficulty: "Beginner to Professional",
description: "Learn how computers and internet work.",
icon: "💻",
},
];

const difficultyBadges: { [key: string]: string } = {
Beginner: "badge bg-success",
"Beginner to Advanced": "badge bg-primary",
Intermediate: "badge bg-warning text-dark",
"Beginner to Expert": "badge bg-info text-dark",
"Beginner to Professional": "badge bg-danger",
};

const SubjectsPage: React.FC = () => {
const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");

const filteredSubjects = subjects.filter((subject) => {
const matchesDifficulty =
filter === "All" || subject.difficulty === filter;
const matchesSearch = subject.name
.toLowerCase()
.includes(search.toLowerCase());
return matchesDifficulty && matchesSearch;
});

const uniqueDifficulties = Array.from(
new Set(subjects.map((s) => s.difficulty))
);

return (
<div className="container py-4 subjects-page">
<div className="text-center mb-4">
<h1 className="text-gradient fw-bold">Explore Subjects</h1>
<p className="text-muted">Learn topics at your own pace</p>
</div>

php-template
Copy
Edit
  <div className="row mb-4">
    <div className="col-md-6">
      <select
        className="form-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Difficulties</option>
        {uniqueDifficulties.map((diff) => (
          <option key={diff} value={diff}>
            {diff}
          </option>
        ))}
      </select>
    </div>
    <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        placeholder="Search subjects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  </div>

  <div className="row">
    {filteredSubjects.map((subject) => (
      <div key={subject.name} className="col-md-6 col-lg-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-title">
              {subject.icon} {subject.name}
            </h4>
            <span
              className={difficultyBadges[subject.difficulty] ?? "badge bg-secondary"}
            >
              {subject.difficulty}
            </span>
            <p className="card-text mt-2">{subject.description}</p>
          </div>
        </div>
      </div>
    ))}
    {filteredSubjects.length === 0 && (
      <div className="col-12 text-center">
        <p className="text-muted">No subjects match your filters.</p>
      </div>
    )}
  </div>
</div>
);
};

export default SubjectsPage;
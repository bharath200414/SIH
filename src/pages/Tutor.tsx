import React from "react";
import "./TutorsPage.css";

const tutors = [
{
name: "Alice Johnson",
subject: "Mathematics",
bio: "10+ years experience teaching high school mathematics. Passionate about making math fun and accessible.",
},
{
name: "Brian Smith",
subject: "Physics",
bio: "Physics educator with a strong background in quantum mechanics and space sciences.",
},
{
name: "Clara Lee",
subject: "Chemistry",
bio: "Specializes in organic and inorganic chemistry. Known for interactive lab-based sessions.",
},
{
name: "David Kim",
subject: "Computer Science",
bio: "Expert in algorithms, data structures, and full-stack development. Loves building tech with students.",
},
];

const TutorsPage: React.FC = () => {
return (
<div className="tutors-page-background">
<div className="container py-5">
<h1 className="text-center mb-4 text-gradient animate-pulse">Meet Our Tutors</h1>
<div className="row">
{tutors.map((tutor, index) => (
<div className="col-md-6 col-lg-4 mb-4" key={index}>
<div className="card tutor-card h-100 shadow-sm">
<div className="card-body">
<h5 className="card-title">{tutor.name}</h5>
<h6 className="card-subtitle mb-2 text-muted">{tutor.subject}</h6>
<p className="card-text">{tutor.bio}</p>
</div>
</div>
</div>
))}
</div>
</div>
</div>
);
};

export default TutorsPage;
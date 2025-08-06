import React, { useState } from "react";
import "./FeedbackPage.css";

const FeedbackPage: React.FC = () => {
const [formData, setFormData] = useState({
name: "",
email: "",
rating: "5",
message: "",
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Placeholder for actual submission logic (e.g., API call)
console.log("Feedback submitted:", formData);
setSubmitted(true);
};

return (
<div className="feedback-page py-5">
<div className="container">
<h2 className="text-center gradient-text mb-4">💬 We Value Your Feedback</h2>
{!submitted ? (
<form className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
<div className="mb-3">
<label className="form-label fw-semibold">Name</label>
<input type="text" className="form-control" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
</div>
<div className="mb-3">
<label className="form-label fw-semibold">Email</label>
<input type="email" className="form-control" placeholder="your@email.com" name="email" value={formData.email} onChange={handleChange} required />
</div>
<div className="mb-3">
<label className="form-label fw-semibold">Rating</label>
<select className="form-select" name="rating" value={formData.rating} onChange={handleChange} >
<option value="5">⭐⭐⭐⭐⭐ Excellent</option>
<option value="4">⭐⭐⭐⭐ Good</option>
<option value="3">⭐⭐⭐ Average</option>
<option value="2">⭐⭐ Poor</option>
<option value="1">⭐ Terrible</option>
</select>
</div>
<div className="mb-3">
<label className="form-label fw-semibold">Message</label>
<textarea className="form-control" rows={4} placeholder="Tell us about your experience..." name="message" value={formData.message} onChange={handleChange} ></textarea>
</div>
<div className="text-center">
<button className="btn btn-primary px-4" type="submit">
Submit Feedback
</button>
</div>
</form>
) : (
<div className="alert alert-success text-center mx-auto" style={{ maxWidth: "600px" }}>
🎉 Thank you for your feedback!
</div>
)}
</div>
</div>
);
};
export default FeedbackPage;
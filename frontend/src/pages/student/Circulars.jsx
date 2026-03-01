import React from "react";
import "../Parent/styles/Parent.css";

export default function StudentCirculars() {
    const circulars = [
        { title: "Summer Vacation Announcement", date: "2024-03-10", content: "School will remain closed from May 1st to June 15th for summer holidays." },
        { title: "Quarterly Exam Schedule", date: "2024-02-28", content: "The quarterly examination schedule has been released. Exams start from March 10th." },
        { title: "Inter-School Sports Meet", date: "2024-02-15", content: "Participation forms for the volleyball and basketball teams are available now." }
    ];

    return (
        <div className="parent-circulars-page">
            <div className="dashboard-header">
                <h1>School Circulars</h1>
                <p>Stay updated with the latest news and notices</p>
            </div>

            <div className="circulars-list">
                {circulars.map((c, i) => (
                    <div key={i} className="circular-card glass-card">
                        <div className="circular-header">
                            <h3>{c.title}</h3>
                            <span className="circular-date">{c.date}</span>
                        </div>
                        <p className="circular-content">{c.content}</p>
                        <button className="download-btn">Download PDF</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

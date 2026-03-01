import React from "react";
import "../Parent/styles/Parent.css";

export default function StudentDashboard() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const announcements = [
        { title: "Final Exams Schedule", date: "2024-03-25", type: "Urgent" },
        { title: "Sports Day Registration", date: "2024-03-22", type: "Event" },
        { title: "Library Books Return", date: "2024-03-20", type: "Notice" }
    ];

    return (
        <div className="parent-dashboard">
            <div className="dashboard-header">
                <h1>Hello, {user.name}!</h1>
                <p>Welcome to your academic dashboard. Here's what's happening today.</p>
            </div>

            <div className="summary-cards">
                <div className="summary-card">
                    <div className="card-icon">📚</div>
                    <div className="card-info">
                        <span className="card-label">Overall Attendance</span>
                        <span className="card-value">92%</span>
                    </div>
                </div>
                <div className="summary-card">
                    <div className="card-icon">📝</div>
                    <div className="card-info">
                        <span className="card-label">Last Exam Score</span>
                        <span className="card-value">85%</span>
                    </div>
                </div>
                <div className="summary-card">
                    <div className="card-icon">💳</div>
                    <div className="card-info">
                        <span className="card-label">Fee Status</span>
                        <span className="card-value">Paid</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                <section className="announcements-section glass-card">
                    <h2>Recent Announcements</h2>
                    <div className="announcement-list">
                        {announcements.map((a, i) => (
                            <div key={i} className="announcement-item">
                                <div className={`announcement-type ${a.type.toLowerCase()}`}>
                                    {a.type}
                                </div>
                                <div className="announcement-details">
                                    <h3>{a.title}</h3>
                                    <span className="announcement-date">{a.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

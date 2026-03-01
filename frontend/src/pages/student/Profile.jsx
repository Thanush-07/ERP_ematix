import React from "react";
import "../Parent/styles/Parent.css";

export default function StudentProfile() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <div className="parent-profile-page">
            <div className="dashboard-header">
                <h1>My Profile</h1>
                <p>Your academic and personal records</p>
            </div>

            <div className="profile-content glass-card">
                <div className="profile-header">
                    <div className="profile-avatar">{user.name?.charAt(0).toUpperCase()}</div>
                    <div className="profile-main-info">
                        <h2>{user.name}</h2>
                        <p className="student-id">Admission No: ADM-2024-001</p>
                    </div>
                </div>

                <div className="profile-details-grid">
                    <div className="detail-group">
                        <label>Full Name</label>
                        <p>{user.name}</p>
                    </div>
                    <div className="detail-group">
                        <label>Personal Email</label>
                        <p>{user.name?.toLowerCase().replace(" ", ".")}@school.com</p>
                    </div>
                    <div className="detail-group">
                        <label>Class & Section</label>
                        <p>10th Std - Section A</p>
                    </div>
                    <div className="detail-group">
                        <label>Roll Number</label>
                        <p>15</p>
                    </div>
                    <div className="detail-group">
                        <label>Academic Year</label>
                        <p>2024-2025</p>
                    </div>
                    <div className="detail-group">
                        <label>Contact Phone</label>
                        <p>+91 98765 43210</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

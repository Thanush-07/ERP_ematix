import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Parent/styles/ParentLogin.css";
import ematixLogo from "../../assets/ematix.png";

const API_BASE = "http://localhost:5000/api";

export default function StudentLogin() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [studentName, setStudentName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [verifiedStudent, setVerifiedStudent] = useState(null);

    const handleStudentVerify = async (e) => {
        e.preventDefault();
        if (!studentName.trim() || !phone.trim()) {
            setError("Please enter both your name and registered phone number");
            return;
        }

        try {
            setLoading(true);
            setError("");

            // Using the same verify endpoint as parent but for student portal
            const res = await axios.get(`${API_BASE}/parent/verify`, {
                params: { studentName, phone }
            });

            setVerifiedStudent(res.data);
            setStep(2);
        } catch (err) {
            setError(err.response?.data?.message || "Verification failed. Check your name and phone.");
        } finally {
            setLoading(false);
        }
    };

    const handleStudentLogin = async (e) => {
        e.preventDefault();
        if (!verifiedStudent) return;

        try {
            setLoading(true);
            setError("");

            // Store student info
            localStorage.setItem("user", JSON.stringify({
                id: verifiedStudent.studentId,
                name: verifiedStudent.studentName,
                role: "student"
            }));

            navigate("/student/dashboard");
        } catch (err) {
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="parent-login-page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <img src={ematixLogo} alt="Ematix Logo" className="ematix-logo" />
                        <div className="login-logo">
                            <span>🎓</span>
                        </div>
                        <h1>Student Portal</h1>
                        <p>Access your academic profile and reports</p>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    {step === 1 ? (
                        <form onSubmit={handleStudentVerify}>
                            <div className="form-group">
                                <label>Your Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={studentName}
                                    onChange={(e) => {
                                        setStudentName(e.target.value);
                                        setError("");
                                    }}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Registered Phone Number *</label>
                                <input
                                    type="tel"
                                    placeholder="10-digit registered number"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        setError("");
                                    }}
                                    maxLength="10"
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? "Verifying..." : "Verify & Continue"}
                            </button>

                            <div className="login-footer">
                                <p>Not a student? <a href="/login">Go back</a></p>
                            </div>
                        </form>
                    ) : (
                        <div>
                            <div className="verification-success">
                                <div className="success-icon">✓</div>
                                <p>Identity verified!</p>
                                <p className="student-name">{verifiedStudent?.studentName}</p>
                                <p className="parent-name">Class Information Verified</p>
                            </div>

                            <button
                                onClick={handleStudentLogin}
                                className="btn-primary"
                                disabled={loading}
                                style={{ width: "100%", marginTop: "2rem" }}
                            >
                                {loading ? "Logging in..." : "Enter Portal"}
                            </button>

                            <button
                                onClick={() => {
                                    setStep(1);
                                    setVerifiedStudent(null);
                                    setStudentName("");
                                    setPhone("");
                                    setError("");
                                }}
                                className="btn-ghost"
                                style={{ width: "100%", marginTop: "1rem" }}
                            >
                                Back
                            </button>
                        </div>
                    )}
                </div>

                <div className="features-section">
                    <div className="feature">
                        <span className="feature-icon">📝</span>
                        <h3>Academic Results</h3>
                        <p>Check your exam marks and performance summaries</p>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">📅</span>
                        <h3>Attendance</h3>
                        <p>View your daily attendance and monthly percentage</p>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">📖</span>
                        <h3>E-Learning</h3>
                        <p>Access study materials and classroom assignments</p>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">✉️</span>
                        <h3>Circulars</h3>
                        <p>Get latest updates and announcements from school</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

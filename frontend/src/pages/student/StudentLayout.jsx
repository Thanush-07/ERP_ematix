import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../Parent/styles/ParentLayout.css";

export default function StudentLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };

    const isActive = (path) => location.pathname === path;

    const navigationItems = [
        { path: "/student/dashboard", label: "Dashboard", icon: "📊" },
        { path: "/student/profile", label: "My Profile", icon: "👤" },
        { path: "/student/fees", label: "Fees", icon: "💳" },
        { path: "/student/circulars", label: "Circulars", icon: "✉️" },
    ];

    return (
        <div className="parent-layout">
            {/* Mobile Header */}
            <div className="parent-mobile-header">
                <button
                    className="menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
                </button>
                <h1 className="mobile-title">Student Portal</h1>
                <button className="logout-mobile" onClick={handleLogout}>
                    ✕
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`parent-sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <div className="logo-section">
                        <span className="logo-icon">🎓</span>
                        <h2>Student Portal</h2>
                    </div>
                </div>

                <div className="user-section">
                    <div className="user-avatar">{user.name?.charAt(0).toUpperCase()}</div>
                    <div className="user-info">
                        <p className="user-name">{user.name}</p>
                        <p className="user-role">Student</p>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    {navigationItems.map((item) => (
                        <button
                            key={item.path}
                            className={`nav-item ${isActive(item.path) ? "active" : ""}`}
                            onClick={() => {
                                navigate(item.path);
                                setSidebarOpen(false);
                            }}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        🚪 Logout
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main className="parent-main">
                <Outlet />
            </main>
        </div>
    );
}

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./styles/Login.css";
import ematixLogo from "../../assets/ematix.png";

const API_URL = "http://localhost:5000/api/auth/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("staff");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1) Send request to backend
      const res = await axios.post(API_URL, { email, password });

      // 2) Get token and user from response
      const { token, user } = res.data;

      // Filter: Admins should use /admin
      const adminRoles = ["company_admin", "institution_admin", "branch_admin"];
      if (adminRoles.includes(user.role)) {
        setError("Access denied. Please use the administrator login page.");
        setLoading(false);
        return;
      }

      // Check if selected role matches user role
      if (user.role !== role) {
        setError(`Access denied. This account is not registered as ${role === 'staff' ? 'Faculty' : 'Student'}.`);
        setLoading(false);
        return;
      }

      // 3) Save to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // 4) Redirect based on role
      if (user.role === "staff") {
        navigate("/staff/dashboard");
      } else if (user.role === "student") {
        navigate("/student/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enterprise-container">
      {/* LEFT SIDE */}
      <div className="enterprise-left">
        <img src={ematixLogo} alt="Ematix Logo" className="left-logo" />

        <div className="left-text">
          <h1 className="left-title">Ematix School Management ERP</h1>
          <p>
            A complete cloud-based enterprise school management system.
            Manage students, staff, attendance, academics, fees & more.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="enterprise-right">
        <div className="form-box glass-card">
          <h2>Welcome Back</h2>
          <p className="form-sub">Login to your account</p>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Category</label>
              <select
                className="role-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="staff">Staff / Faculty</option>
                <option value="student">Student</option>
              </select>
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <div className="error">{error}</div>}

            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>

            <div className="forgot-link">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="parent-btn"
              onClick={() => navigate("/parent/login")}
            >
              Login as Parent
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

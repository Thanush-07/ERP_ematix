import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import OtpVerify from "./pages/auth/OtpVerify";
import ForgotPassword from "./pages/auth/ForgotPassword";

import AdminRoutes from "./routes/AdminRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";
import WardenRoutes from "./routes/WardenRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import ParentRoutes from "./routes/ParentRoutes";
import CanteenRoutes from "./routes/CanteenRoutes";
import ShopRoutes from "./routes/ShopRoutes";

const ROLE_REDIRECT = {
  super_admin: "/admin",
  admin: "/admin",
  accounts_staff: "/admin",
  teacher: "/teacher",
  hostel_warden: "/warden",
  shop_operator: "/shop",
  canteen_operator: "/canteen",
  student: "/student",
  parent: "/parent",
};

function App() {
  const { isAuthenticated, role } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<OtpVerify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Role portals */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
        <Route path="/warden/*" element={<WardenRoutes />} />
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/parent/*" element={<ParentRoutes />} />
        <Route path="/canteen/*" element={<CanteenRoutes />} />
        <Route path="/shop/*" element={<ShopRoutes />} />

        {/* Default redirect */}
        <Route
          path="*"
          element={
            isAuthenticated
              ? <Navigate to={ROLE_REDIRECT[role] || "/login"} replace />
              : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

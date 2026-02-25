import { Routes, Route, Navigate } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout";
import usePermission from "../hooks/usePermission";
import Dashboard     from "../pages/student/Dashboard";
import Profile       from "../pages/student/Profile";
import Fees          from "../pages/student/Fees";
import PaymentHistory from "../pages/student/PaymentHistory";
import Ledger        from "../pages/student/Ledger";
import Circulars     from "../pages/student/Circulars";
import Leave         from "../pages/student/Leave";
import Outpass       from "../pages/student/Outpass";

export default function StudentRoutes() {
  const { hasRole } = usePermission();
  if (!hasRole("student")) return <Navigate to="/login" replace />;
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route index         element={<Dashboard />} />
        <Route path="profile"  element={<Profile />} />
        <Route path="fees"     element={<Fees />} />
        <Route path="payments" element={<PaymentHistory />} />
        <Route path="ledger"   element={<Ledger />} />
        <Route path="circulars" element={<Circulars />} />
        <Route path="leave"    element={<Leave />} />
        <Route path="outpass"  element={<Outpass />} />
      </Route>
    </Routes>
  );
}

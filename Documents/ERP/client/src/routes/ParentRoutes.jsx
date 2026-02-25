import { Routes, Route, Navigate } from "react-router-dom";
import ParentLayout  from "../layouts/ParentLayout";
import usePermission from "../hooks/usePermission";
import Dashboard     from "../pages/parent/Dashboard";
import ChildProfile  from "../pages/parent/ChildProfile";
import Fees          from "../pages/parent/Fees";
import Ledger        from "../pages/parent/Ledger";
import LeaveApply    from "../pages/parent/LeaveApply";
import OutpassRequest from "../pages/parent/OutpassRequest";
import Circulars     from "../pages/parent/Circulars";

export default function ParentRoutes() {
  const { hasRole } = usePermission();
  if (!hasRole("parent")) return <Navigate to="/login" replace />;
  return (
    <Routes>
      <Route element={<ParentLayout />}>
        <Route index           element={<Dashboard />} />
        <Route path="child"    element={<ChildProfile />} />
        <Route path="fees"     element={<Fees />} />
        <Route path="ledger"   element={<Ledger />} />
        <Route path="leave"    element={<LeaveApply />} />
        <Route path="outpass"  element={<OutpassRequest />} />
        <Route path="circulars" element={<Circulars />} />
      </Route>
    </Routes>
  );
}

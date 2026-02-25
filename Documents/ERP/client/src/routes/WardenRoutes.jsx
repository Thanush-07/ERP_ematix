import { Routes, Route, Navigate } from "react-router-dom";
import WardenLayout      from "../layouts/WardenLayout";
import usePermission     from "../hooks/usePermission";
import Dashboard         from "../pages/warden/Dashboard";
import CheckinLog        from "../pages/warden/CheckinLog";
import OutpassApproval   from "../pages/warden/OutpassApproval";
import HostelInventory   from "../pages/warden/HostelInventory";

export default function WardenRoutes() {
  const { hasRole } = usePermission();
  if (!hasRole("hostel_warden")) return <Navigate to="/login" replace />;
  return (
    <Routes>
      <Route element={<WardenLayout />}>
        <Route index          element={<Dashboard />} />
        <Route path="checkin" element={<CheckinLog />} />
        <Route path="outpass" element={<OutpassApproval />} />
        <Route path="inventory" element={<HostelInventory />} />
      </Route>
    </Routes>
  );
}

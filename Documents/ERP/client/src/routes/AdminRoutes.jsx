import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import usePermission from "../hooks/usePermission";
import { Navigate } from "react-router-dom";
import Dashboard       from "../pages/admin/Dashboard";
import StudentList     from "../pages/admin/students/StudentList";
import StudentCreate   from "../pages/admin/students/StudentCreate";
import StudentEdit     from "../pages/admin/students/StudentEdit";
import StudentProfile  from "../pages/admin/students/StudentProfile";
import CourseList      from "../pages/admin/courses/CourseList";
import FeeHeads        from "../pages/admin/fees/FeeHeads";
import FeeStructureList from "../pages/admin/fees/FeeStructureList";
import FeeBillList     from "../pages/admin/fees/FeeBillList";
import BillGenerate    from "../pages/admin/fees/BillGenerate";
import PaymentList     from "../pages/admin/payments/PaymentList";
import StudentLedger   from "../pages/admin/ledger/StudentLedger";
import LeaveRequests   from "../pages/admin/leave/LeaveRequests";
import OutpassRequests from "../pages/admin/outpass/OutpassRequests";
import CheckinLog      from "../pages/admin/checkin/CheckinLog";
import CircularList    from "../pages/admin/circulars/CircularList";
import ItemList        from "../pages/admin/inventory/ItemList";
import FeeReport       from "../pages/admin/reports/FeeReport";
import UserManagement  from "../pages/admin/settings/UserManagement";
import SystemConfig    from "../pages/admin/settings/SystemConfig";

export default function AdminRoutes() {
  const { hasRole } = usePermission();
  if (!hasRole("super_admin", "admin", "accounts_staff"))
    return <Navigate to="/login" replace />;

  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="students"         element={<StudentList />} />
        <Route path="students/create"  element={<StudentCreate />} />
        <Route path="students/:id/edit" element={<StudentEdit />} />
        <Route path="students/:id"     element={<StudentProfile />} />
        <Route path="courses"          element={<CourseList />} />
        <Route path="fees/heads"       element={<FeeHeads />} />
        <Route path="fees/structures"  element={<FeeStructureList />} />
        <Route path="fees/bills"       element={<FeeBillList />} />
        <Route path="fees/generate"    element={<BillGenerate />} />
        <Route path="payments"         element={<PaymentList />} />
        <Route path="ledger/:studentId" element={<StudentLedger />} />
        <Route path="leave"            element={<LeaveRequests />} />
        <Route path="outpass"          element={<OutpassRequests />} />
        <Route path="checkin"          element={<CheckinLog />} />
        <Route path="circulars"        element={<CircularList />} />
        <Route path="inventory"        element={<ItemList />} />
        <Route path="reports/fees"     element={<FeeReport />} />
        <Route path="settings/users"   element={<UserManagement />} />
        <Route path="settings/config"  element={<SystemConfig />} />
      </Route>
    </Routes>
  );
}

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// authentication
import Login from "./pages/auth/Login";
import AdminLogin from "./pages/auth/AdminLogin";
import StudentLogin from "./pages/auth/StudentLogin";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
// company admin
import CompanyLayout from "./pages/admin/Company_admin/components/CompanyLayout";
import CompanyAdminDashboard from "./pages/admin/Company_admin/Dashboard";
import Institutions from "./pages/admin/Company_admin/Institutions";
import Users from "./pages/admin/Company_admin/Users";
import GlobalReport from "./pages/admin/Company_admin/GlobalReport";
// Institution admin
import InstitutionLayout from "./pages/admin/Institution_admin/InstitutionLayout";
import InstitutionDashboard from "./pages/admin/Institution_admin/Dashboard";
import InstitutionBranches from "./pages/admin/Institution_admin/Branches";
import BranchAdmins from "./pages/admin/Institution_admin/Branches";
import InstitutionReports from "./pages/admin/Institution_admin/Reports";
import ChangePassword from "./pages/admin/Institution_admin/ChangePassword";
// Branch admin
import BranchLayout from "./pages/admin/Branch_admin/BranchLayout";
import BranchDashboard from "./pages/admin/Branch_admin/Dashboard";
import BranchStudents from "./pages/admin/Branch_admin/Students";
import BranchFees from "./pages/admin/Branch_admin/Fees";
import BranchSales from "./pages/admin/Branch_admin/Sales";
import BranchInventory from "./pages/admin/Branch_admin/Inventory";
import BranchExpenses from "./pages/admin/Branch_admin/Expenses";
import BranchBuses from "./pages/admin/Branch_admin/Buses";
import BranchReports from "./pages/admin/Branch_admin/Reports";
import BranchChangePassword from "./pages/admin/Branch_admin/ChangePasswordNew";
import BranchStaffManagement from "./pages/admin/Branch_admin/StaffManagement";
// Other roles
import StaffLayout from "./pages/Staff/StaffLayout";
import StaffDashboard from "./pages/Staff/Dashboard";
import StaffAttendance from "./pages/Staff/Attendance";
import StaffReports from "./pages/Staff/Reports";
import StaffCollectFee from "./pages/Staff/CollectFee";
import StaffChangePassword from "./pages/Staff/ChangePassword";
import ParentLogin from "./pages/Parent/ParentLogin";
import ParentLayout from "./pages/Parent/ParentLayout";
import ParentDashboard from "./pages/Parent/Dashboard";
import ParentReports from "./pages/Parent/Reports";
import ParentFees from "./pages/Parent/FeeDetails";
import ParentProfile from "./pages/Parent/StudentProfile";
// Student roles
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentFees from "./pages/student/Fees";
import StudentCirculars from "./pages/student/Circulars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Company admin module with layout */}
        <Route path="/company-admin" element={<CompanyLayout />}>
          <Route path="dashboard" element={<CompanyAdminDashboard />} />
          <Route path="institutions" element={<Institutions />} />
          <Route path="users" element={<Users />} />
          <Route path="report" element={<GlobalReport />} />
        </Route>

        {/* Institution admin module with layout */}
        <Route path="/institution" element={<InstitutionLayout />}>
          <Route path="dashboard" element={<InstitutionDashboard />} />
          <Route path="branches" element={<InstitutionBranches />} />
          <Route path="branch-admins" element={<BranchAdmins />} />
          <Route path="reports" element={<InstitutionReports />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        {/* Branch admin module with layout */}
        <Route path="/branch" element={<BranchLayout />}>
          <Route path="dashboard" element={<BranchDashboard />} />
          <Route path="students" element={<BranchStudents />} />
          <Route path="fees" element={<BranchFees />} />
          <Route path="sales" element={<BranchSales />} />
          <Route path="inventory" element={<BranchInventory />} />
          <Route path="expenses" element={<BranchExpenses />} />
          <Route path="buses" element={<BranchBuses />} />
          <Route path="staff-management" element={<BranchStaffManagement />} />
          <Route path="change-password" element={<BranchChangePassword />} />
          <Route path="reports" element={<BranchReports />} />
        </Route>
        {/* Staff module with layout */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="attendance" element={<StaffAttendance />} />
          <Route path="reports" element={<StaffReports />} />
          <Route path="collect-fee" element={<StaffCollectFee />} />
          <Route path="change-password" element={<StaffChangePassword />} />
        </Route>

        {/* Parent */}
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent" element={<ParentLayout />}>
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="reports" element={<ParentReports />} />
          <Route path="fees" element={<ParentFees />} />
          <Route path="profile" element={<ParentProfile />} />
        </Route>

        {/* Student */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="fees" element={<StudentFees />} />
          <Route path="circulars" element={<StudentCirculars />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

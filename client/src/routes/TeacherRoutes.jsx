import { Routes, Route, Navigate } from "react-router-dom";
import TeacherLayout  from "../layouts/TeacherLayout";
import usePermission  from "../hooks/usePermission";
import Dashboard      from "../pages/teacher/Dashboard";
import MyStudents     from "../pages/teacher/MyStudents";
import LeaveApproval  from "../pages/teacher/LeaveApproval";
import Circulars      from "../pages/teacher/Circulars";

export default function TeacherRoutes() {
  const { hasRole } = usePermission();
  if (!hasRole("teacher")) return <Navigate to="/login" replace />;
  return (
    <Routes>
      <Route element={<TeacherLayout />}>
        <Route index            element={<Dashboard />} />
        <Route path="students"  element={<MyStudents />} />
        <Route path="leave"     element={<LeaveApproval />} />
        <Route path="circulars" element={<Circulars />} />
      </Route>
    </Routes>
  );
}

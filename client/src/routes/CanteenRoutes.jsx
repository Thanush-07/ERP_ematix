import { Routes, Route, Navigate } from "react-router-dom";
import CanteenLayout from "../layouts/CanteenLayout";
import usePermission from "../hooks/usePermission";
import Dashboard   from "../pages/canteen/Dashboard";
import Billing     from "../pages/canteen/Billing";
import Items       from "../pages/canteen/Items";
import StockIn     from "../pages/canteen/StockIn";
import LowStockAlert from "../pages/canteen/LowStockAlert";
import SalesReport from "../pages/canteen/SalesReport";

export default function CanteenRoutes() {
  const { hasRole } = usePermission();
  if (!hasRole("canteen_operator")) return <Navigate to="/login" replace />;
  return (
    <Routes>
      <Route element={<CanteenLayout />}>
        <Route index           element={<Dashboard />} />
        <Route path="billing"  element={<Billing />} />
        <Route path="items"    element={<Items />} />
        <Route path="stock"    element={<StockIn />} />
        <Route path="alerts"   element={<LowStockAlert />} />
        <Route path="reports"  element={<SalesReport />} />
      </Route>
    </Routes>
  );
}

import { Routes, Route, Navigate } from "react-router-dom";
import ShopLayout    from "../layouts/ShopLayout";
import usePermission from "../hooks/usePermission";
import Dashboard   from "../pages/shop/Dashboard";
import Billing     from "../pages/shop/Billing";
import Items       from "../pages/shop/Items";
import StockIn     from "../pages/shop/StockIn";
import LowStockAlert from "../pages/shop/LowStockAlert";
import SalesReport from "../pages/shop/SalesReport";

export default function ShopRoutes() {
  const { hasRole } = usePermission();
  if (!hasRole("shop_operator")) return <Navigate to="/login" replace />;
  return (
    <Routes>
      <Route element={<ShopLayout />}>
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

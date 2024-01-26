import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ScraperPage from "../pages/dashboard/ScraperPage";
import ScraperDetailPage from "../pages/dashboard/ScraperDetailPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/scraper" element={<ScraperPage />} />
        <Route path="/scraper" element={<ScraperDetailPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

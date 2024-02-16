import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import PageLoading from "../pages/PageLoading";
const LandingPage = lazy(() => import("../pages/landing/LandingPage"));
const DashboardPage = lazy(() => import("../pages/dashboard/DashboardPage"));
const HistoryPage = lazy(() => import("../pages/dashboard/HistoryPage"));
const DetailPage = lazy(() => import("../pages/dashboard/DetailPage"));
const ScraperPage = lazy(() => import("../pages/dashboard/ScraperPage"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const SignUpPage = lazy(() => import("../pages/auth/SignUpPage"));

export const ROUTE_PATHS = {
  landing: "/",
  dashboard: "/dashboard",
  scraper: "/scraper",
  history: "/history",
  login: "/login",
  signUp: "/sign-up",
  scraperDetail: "/scraper/detail",
};

const Router = () => {
  return (
    <Routes>
      <Suspense fallback={<PageLoading />}>
        <Route element={<LandingPage />} path={ROUTE_PATHS.landing} />
        <Route element={<DashboardPage />} path={ROUTE_PATHS.dashboard} />
        <Route element={<ScraperPage />} path={ROUTE_PATHS.scraper} />
        <Route element={<HistoryPage />} path={ROUTE_PATHS.history} />
        <Route element={<LoginPage />} path={ROUTE_PATHS.login} />
        <Route element={<SignUpPage />} path={ROUTE_PATHS.signUp} />
        <Route element={<DetailPage />} path={ROUTE_PATHS.scraperDetail} />
      </Suspense>
    </Routes>
  );
};

export default Router;

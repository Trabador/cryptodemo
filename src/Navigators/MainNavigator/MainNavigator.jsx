import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../../components/Loading";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetail = lazy(() => import("../../pages/CoinDetail"));

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainNavigator;

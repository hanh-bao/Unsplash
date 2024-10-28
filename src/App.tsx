import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import PhotoDetail from "./pages/photo-detail";
import ErrorPage from "./pages/error";
import PhotoList from "@/pages/photo-list";
import Navbar from "./pages/nav-bar";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        style={{
          height: "var(--body-height)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhotoList />} />
          <Route path=":id" element={<PhotoDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

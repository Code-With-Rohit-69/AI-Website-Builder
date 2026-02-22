import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Pricing from "./pages/Pricing.tsx";
import Projects from "./pages/Projects.tsx";
import MyProjects from "./pages/MyProjects.tsx";
import Preview from "./pages/Preview.tsx";
import Community from "./pages/Community.tsx";
import View from "./pages/View.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  const { pathname } = useLocation();

  const hideNavbar =
    (pathname.startsWith("/projects/") && pathname !== "/projects") ||
    pathname.startsWith("/view/") ||
    pathname.startsWith("/preview/");

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/preview/:projectId/:versionId" element={<Preview />} />
        <Route path="/community" element={<Community />} />
        <Route path="/view/:projectId" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Outlet } from "react-router-dom";

// import Header from "../components/Header";
import Footer from "../components/Footer";

function Index() {
  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  return (
    <div className="flex flex-col" sx={{ width: "100%" }}>
      {/* <Header /> */}
      <main id="main-page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Index;

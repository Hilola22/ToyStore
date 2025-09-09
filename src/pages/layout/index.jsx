import React from "react";
import { Outlet } from "react-router-dom";
import SubHeader from "../../components/subheader/SubHeader";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main className="min-h-screen bg-[#F8F8F8]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home/Home";


const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div className="text-center text-[48px] pt-50 font-bold">
                404 <p className="text-[24px] font-semibold ">Page NotFound</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default React.memo(AppRouter);

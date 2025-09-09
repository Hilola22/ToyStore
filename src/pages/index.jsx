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
          {/* <Route path="/posts/:id" element={<PostsDetail />} /> */}
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default React.memo(AppRouter);

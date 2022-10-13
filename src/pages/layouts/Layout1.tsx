import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardList from "../boards/BoardList";
import Home from "../home/Home";

const Layout1 = function () {
  return (
   <div>
    <button>dfffs</button>
     <Routes>
      <Route>
        <Route path="/" element={<Home  />} />
        <Route path="/board" element={<BoardList />} />
      </Route>
    </Routes>
   </div>
  );
};

export default Layout1;

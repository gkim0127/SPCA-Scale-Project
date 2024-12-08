import React from "react";
import TopNav from "../components/TopNav";
import { Outlet } from "react-router-dom";

const TopNavPageLayout = () => {
  return (
    <React.Fragment>
        <TopNav />
        <Outlet />
    </React.Fragment>
  )
};

export default TopNavPageLayout;

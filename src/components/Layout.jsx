import React from "react";

import ReusableSidebar from "./ReusableSidebar";
import Navbar from "./Navbar";

function Layout({ children, setShowSidebar }) {
  return (
    <div className="flex h-screen ">
      <ReusableSidebar setShowSidebar={setShowSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1  bg-background-body overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;

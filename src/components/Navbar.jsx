import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-light-purple p-4 shadow-lg light-white">
      <div className="text-xl font-bold">ERP System</div>
      <div className="flex items-center space-x-4">
        <button className="p-2">Profile</button>
        <button className="p-2">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;

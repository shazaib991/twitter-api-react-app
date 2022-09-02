import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-user-add">
          <input type="text" placeholder="Enter User's Name" />
        </div>
        <div className="sidebar-users-list-container">
          <div className="sidebar-users-list active">
            <p>Barak Obama @BarakObama</p>
          </div>
          <div className="sidebar-users-list">
            <p>Barak Obama @BarakObama</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

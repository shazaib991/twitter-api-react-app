import React from "react";
import { useState } from "react";
import "./sidebar.css";

function Sidebar({ isDarkMode }) {
  const [active, setActive] = useState("Barak Obama");
  const users = [
    {
      name: "Barak Obama",
      id: "@BarakObama",
    },
    {
      name: "Joe Biden",
      id: "@JoeBiden",
    },
  ];

  return (
    <div className={`sidebar-container ${isDarkMode ? "dark-active" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-user-add">
          <input type="text" placeholder="Enter User's Name" />
          <button>Add</button>
        </div>
        <div className="sidebar-users-list-container">
          {users.map((item) => {
            return (
              <div
                onClick={() => setActive(item.name)}
                className={`sidebar-users-list ${
                  active === item.name ? "active" : ""
                }`}
              >
                <p>
                  {item.name}
                  {item.id}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

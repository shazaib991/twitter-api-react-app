import React from "react";
import { useState } from "react";
import "./sidebar.css";

function Sidebar({ isDarkMode, fetchTweets, tweets }) {
  const [active, setActive] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className={`sidebar-container ${isDarkMode ? "dark-active" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-user-add">
          <input
            type="text"
            placeholder="Enter User's Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <button onClick={() => fetchTweets(userName)}>Add</button>
        </div>
        <div className="sidebar-users-list-container">
          {tweets.length !== 0 &&
            tweets.map((item, index) => {
              return (
                <div
                  onClick={() => setActive(item.name)}
                  className={`sidebar-users-list ${
                    active === item.name ? "active" : ""
                  }`}
                  key={index}
                >
                  <p>
                    {item.user.data.name}
                    {`@${item.user.data.username}`}
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

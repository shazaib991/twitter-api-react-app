import React from "react";
import "./main.css";
import barakObamaImage from "../../images/barak-obama.jpg";

function Main({ isDarkMode }) {
  return (
    <div className={`main-container ${isDarkMode ? "dark-active" : ""}`}>
      <div className="main">
        <div className="main-search-tweets">
          <input type="text" placeholder="Search Tweets" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className="main-tweets-container">
          <div className="main-tweet">
            <div className="main-tweet-profile-and-name">
              <div className="main-tweet-profile">
                <img src={barakObamaImage} alt="barak obama" />
              </div>
              <div className="main-tweet-name">
                <p>Barak Obama</p>
                <p>@Barak Obama</p>
              </div>
            </div>
            <div className="main-tweet-text">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, of type scrambled it to make a type. Barak he
                to make a type. Barak he to make a type. Barak he to make a
                type. Barak he.
              </p>
            </div>
          </div>
          <div className="main-tweet">
            <div className="main-tweet-profile-and-name">
              <div className="main-tweet-profile">
                <img src={barakObamaImage} alt="barak obama" />
              </div>
              <div className="main-tweet-name">
                <p>Barak Obama</p>
                <p>@Barak Obama</p>
              </div>
            </div>
            <div className="main-tweet-text">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, of type scrambled it to make a type. Barak he
                to make a type. Barak he to make a type. Barak he to make a
                type. Barak he.
              </p>
            </div>
          </div>
          <div className="main-tweet">
            <div className="main-tweet-profile-and-name">
              <div className="main-tweet-profile">
                <img src={barakObamaImage} alt="barak obama" />
              </div>
              <div className="main-tweet-name">
                <p>Barak Obama</p>
                <p>@Barak Obama</p>
              </div>
            </div>
            <div className="main-tweet-text">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, of type scrambled it to make a type. Barak he
                to make a type. Barak he to make a type. Barak he to make a
                type. Barak he.
              </p>
            </div>
          </div>
          <div className="main-tweet">
            <div className="main-tweet-profile-and-name">
              <div className="main-tweet-profile">
                <img src={barakObamaImage} alt="barak obama" />
              </div>
              <div className="main-tweet-name">
                <p>Barak Obama</p>
                <p>@Barak Obama</p>
              </div>
            </div>
            <div className="main-tweet-text">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, of type scrambled it to make a type. Barak he
                to make a type. Barak he to make a type. Barak he to make a
                type. Barak he.
              </p>
            </div>
          </div>
          <div className="main-tweet">
            <div className="main-tweet-profile-and-name">
              <div className="main-tweet-profile">
                <img src={barakObamaImage} alt="barak obama" />
              </div>
              <div className="main-tweet-name">
                <p>Barak Obama</p>
                <p>@Barak Obama</p>
              </div>
            </div>
            <div className="main-tweet-text">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, of type scrambled it to make a type. Barak he
                to make a type. Barak he to make a type. Barak he to make a
                type. Barak he.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

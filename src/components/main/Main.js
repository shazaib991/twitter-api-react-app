import React from "react";
import "./main.css";
import barakObamaImage from "../../images/barak-obama.jpg";

function Main() {
  return (
    <div className="main-container">
      <div className="main">
        <div className="main-search-tweets">
          <input type="text" placeholder="Search Tweets" />
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

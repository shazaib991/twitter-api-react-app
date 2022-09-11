import { React, useEffect, useState } from "react";
import "./main.css";

function Main({ isDarkMode, tweets, setTweets }) {
  const [searchTweet, setSearchTweet] = useState("");

  const handleSearchTweetChange = (e) => {
    setSearchTweet(e.target.value);
  };

  return (
    <div className={`main-container ${isDarkMode ? "dark-active" : ""}`}>
      <div className="main">
        <div className="main-search-tweets">
          <input
            type="text"
            placeholder="Search Tweets"
            onChange={handleSearchTweetChange}
            value={searchTweet}
          />
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
          {tweets.length !== 0 &&
            tweets[0].tweets.data
              .filter((item) =>
                item.text.toLowerCase().includes(searchTweet.toLowerCase())
              )
              .map((tweet, index) => {
                return (
                  <div className="main-tweet" key={index}>
                    <div className="main-tweet-profile-and-name">
                      <div className="main-tweet-profile">
                        {/* <img
                        src={require(`../../images/${tweet.tweets.data}`)}
                        alt="barak obama"
                      /> */}
                      </div>
                      <div className="main-tweet-name">
                        <p>{tweets[0].user.data.name}</p>
                        <p>{`@${tweets[0].user.data.username}`}</p>
                      </div>
                    </div>
                    <div className="main-tweet-text">
                      <p>{tweet.text}</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Main;

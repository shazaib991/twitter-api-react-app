import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Main from "./components/main/Main";
import { useState } from "react";
import axios from "axios";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async (userName) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/tweets/${userName}`
      );
      const data = await response.data;

      setTweets([data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sections-container">
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div
        className={`mid-section-container ${isDarkMode ? "dark-active" : ""}`}
      >
        <div className="mid-section">
          <Sidebar
            isDarkMode={isDarkMode}
            tweets={tweets}
            fetchTweets={fetchTweets}
          />
          <Main isDarkMode={isDarkMode} tweets={tweets} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

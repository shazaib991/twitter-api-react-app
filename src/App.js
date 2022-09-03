import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="sections-container">
      <Navbar setIsDarkMode={setIsDarkMode} />
      <div
        className={`mid-section-container ${isDarkMode ? "dark-active" : ""}`}
      >
        <div className="mid-section">
          <Sidebar isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

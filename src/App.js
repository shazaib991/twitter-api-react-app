import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="sections-container">
      <Navbar />
      <div className="mid-section-container">
        <div className="mid-section">
          <Sidebar />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

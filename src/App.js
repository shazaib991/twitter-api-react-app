import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div className="sections-container">
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

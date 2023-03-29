import Navbar from "../navbar/Navbar";
import "./Header.css";
import { BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <div className="header-bg">
      <header className="Header">
        <Router>
          <Navbar />
        </Router>
        <h1>
          ДОБРО ПОЖАЛОВАТЬ В ИГРУ <br /> <span>DC CYBER</span> В <br />{" "}
          КИБЕРСПОРТИВНЫХ ИГРАХ
        </h1>
      </header>
    </div>
  );
}

export default Header;

import Navbar from "../navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <div className="header-bg">
      <header className="Header">
        <Navbar />
        <h1>
          ДОБРО ПОЖАЛОВАТЬ В ИГРУ <br /> <span>DC CYBER</span> В <br /> КИБЕРСПОРТИВНЫХ ИГРАХ
        </h1>
      </header>
    </div>
  );
}

export default Header;

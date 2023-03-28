import "./Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} alt="img" className="logo" />
      <ul className="nav_list">
        <li className="list_item">
          <a href="#!">О нас</a>
        </li>
        <li className="list_item">
          <a href="#!">Турниры</a>
        </li>
        <li className="list_item">
          <a href="#!">Счёты</a>
        </li>
        <li className="list_item">
          <a href="#!">Фото</a>
        </li>
        <button className="btn">Регистрация</button>
      </ul>
    </nav>
  );
}

export default Navbar;

import "./Navbar.css";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="Navbar active">
      <NavLink exact to="/">
        <img src={logo} alt="img" className="logo" />
      </NavLink>
      <ul className={click ? "nav_list active" : "nav_list"}>
        <li className="list_item">
          <NavLink
            exact
            to="/oнас"
            activeClassName="active"
            className="navlink"
          >
            О нас
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            exact
            to="/tурниры"
            activeClassName="active"
            className="navlink"
          >
            Турниры
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            exact
            to="/cчёты"
            activeClassName="active"
            className="navlink"
          >
            Счёты
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            exact
            to="/фото"
            activeClassName="active"
            className="navlink"
          >
            Фото
          </NavLink>
        </li>
        <button className="btn">Регистрация</button>
      </ul>
      <div className="nav_menu_icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Navbar;

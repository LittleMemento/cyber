import "./Footer.css";
import footerLogo from "../assets/footer-logo.png";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer_block">
        <div className="footer_logo">
          <img src={footerLogo} alt="img" />
          <div className="icons">
            <img src={facebook} alt="img" />
            <img src={telegram} alt="img" />
            <img src={instagram} alt="img" />
            <img src={youtube} alt="img" />
          </div>
        </div>
        <ul className="footer_menu">
          <li>
            <a href="#!">О нас</a>
          </li>
          <li>
            <a href="#!">Турниры</a>
          </li>
          <li>
            <a href="#!">Счёты</a>
          </li>
          <li>
            <a href="#!">Фото</a>
          </li>
        </ul>
        <ul className="footer_menu2">
          <li>
            <a href="#!">Dota 2</a>
          </li>
          <li>
            <a href="#!">StarCraft 2</a>
          </li>
          <li>
            <a href="#!">CS:GO</a>
          </li>
          <li>
            <a href="#!">League of Legends</a>
          </li>
          <li>
            <a href="#!">Fortnite</a>
          </li>
          <li>
            <a href="#!">Rainbow 6 Siege</a>
          </li>
          <li>
            <a href="#!">PUBG</a>
          </li>
        </ul>
        <div className="inp_ema_group">
          <b>Sign up to our newsletter!</b>
          <p>
            Do you want to receive the latest updates and special offers? Enter
            your email below to receive our weekly newsletter.
          </p>
          <form>
            <input type="email" placeholder="Your Email" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;

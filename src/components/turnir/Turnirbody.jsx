import "./Turnirbody.css";
import gameimg1 from "../assets/game-img1.png";
import gameimg2 from "../assets/game-img2.png";

function Turnirbody() {
  return (
    <div className="Turnirbody">
      <div className="block_imgs">
        <img src={gameimg1} alt="img" />
        <b>VS</b>
        <img src={gameimg2} alt="img" />
      </div>
      <div className="block_text">
        <h5>Oldchoolband - Oldchoolband Dota 2</h5>
        <small>03 Марта 2022 13:20</small>
      </div>
    </div>
  );
}

export default Turnirbody;

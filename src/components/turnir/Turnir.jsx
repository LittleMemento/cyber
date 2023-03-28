import "./Turnir.css";
import Turnirbody from "./Turnirbody";
import Turnirnav from "./Turnirnav";

function Turnir() {
  return (
    <div className="Turnir">
      <Turnirnav />
      <Turnirbody />
      <Turnirbody />
      <Turnirbody />
      <Turnirbody />
      <div className="btn_block">
        <button className="btn">
          <b>Записаться</b>
        </button>
      </div>
    </div>
  );
}

export default Turnir;

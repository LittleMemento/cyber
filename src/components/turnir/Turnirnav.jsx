import "./Turnirnav.css";

function Turnirnav() {
  return (
    <div className="Turnirnav">
      <h3>Последние турниры</h3>
      <ul className="turnir_list">
        <li className="list_item fire">
          <a href="#!">Все</a>
          <div className="underline"></div>
        </li>
        <li className="list_item">
          <a href="#!">CS:GO</a>
          <div className="underline"></div>
        </li>
        <li className="list_item">
          <a href="#!">DOTA 2</a>
          <div className="underline"></div>
        </li>
        <li className="list_item">
          <a href="#!">R6 SEGA</a>
          <div className="underline"></div>
        </li>
        <li className="list_item">
          <a href="#!">PUBG</a>
          <div className="underline"></div>
        </li>
      </ul>
    </div>
  );
}

export default Turnirnav;

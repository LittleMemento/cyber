import "./Section.css";
import cardcircleimgone from "../assets/card-circle-img-1.png";
import cardcircleimgtwo from "../assets/card-circle-img-2.png";
import cardcircleimgthree from "../assets/card-circle-img-3.png";

function Section() {
  return (
    <section className="a_section">
      <div className="Section">
        <h2>
          Digital City — профессиональная игровая организация, созданная в 2019
          году. Наша цель — объединить самых талантливых киберспортсменов со
          всего мира.
        </h2>
        <div className="card_box">
          <div className="box_border">
            <div className="box_block">
              <img src={cardcircleimgone} alt="img" />
              <h4>Twitch потоки</h4>
              <p>
                Смотрите новые трансляции каждый день от наших лучших игроков и
                создателей контента.
              </p>
            </div>
          </div>
          <div className="box_border">
            <div className="box_block">
              <img src={cardcircleimgtwo} alt="img" />
              <h4>Новости киберспорта</h4>
              <p>
                Получайте последние новости, обновления и события из мира
                киберспорта.
              </p>
            </div>
          </div>
          <div className="box_border">
            <div className="box_block">
              <img src={cardcircleimgthree} alt="img" />
              <h4>Игровые турниры</h4>
              <p>Узнайте больше о международных и местных игровых турнирах.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;

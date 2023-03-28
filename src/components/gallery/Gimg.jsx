import "./Gallery.css";
import gimg1 from "../assets/gallery-img-1.png";
import gimg2 from "../assets/gallery-img-2.png";
import gimg3 from "../assets/gallery-img-3.png";
import gimg4 from "../assets/gallery-img-4.png";
import gimg5 from "../assets/gallery-img-5.png";
import gimg6 from "../assets/gallery-img-6.png";
import gimg7 from "../assets/gallery-img-7.jpg";
import gimg8 from "../assets/gallery-img-8.png";
import gimg9 from "../assets/gallery-img-9.png";
import gimg10 from "../assets/gallery-img-10.png";

function Gimg() {
  return (
    <div className="Gimg">
      <div className="img1">
        <img src={gimg1} alt="img" />
      </div>
      <div className="img2">
        <img src={gimg2} alt="img" />
        <img src={gimg3} alt="img" />
      </div>
      <div className="img3">
        <img src={gimg4} alt="img" />
      </div>
      <div className="img4">
        <img src={gimg5} alt="img" />
        <img src={gimg6} alt="img" />
      </div>
      <div className="img5">
        <img src={gimg7} alt="img" />
        <img src={gimg8} alt="img" />
      </div>
      <div className="img6">
        <img src={gimg9} alt="img" />
      </div>
      <div className="img7">
        <img src={gimg10} alt="img" />
      </div>
    </div>
  );
}

export default Gimg;

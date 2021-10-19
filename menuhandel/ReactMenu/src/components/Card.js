import "./Card.css";
import { FcCloseUpMode, FcHome } from "react-icons/fc";

function CardConteiner() {
  return (
    <div className="cardCont">
      <img
        alt="product"
        src="https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg"
      />
      <div>
        <p> Hello World</p>
        <span>
          <FcCloseUpMode />
        </span>
        <span>
          <FcHome />
        </span>
        <p id="info">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </p>
      </div>
      <div id="calInfo">
        <span className="cal">265 cal</span>
        <span className="cal">P/F/C 12/10/31</span>
        <span className="cal">53.8 C</span>
      </div>
      <div id="orderme">
        <p id="price">$23.90</p>
        <p className="dis">$23.90</p>
        <button>Order</button>
      </div>
    </div>
  );
}

export { CardConteiner };

//import data from "../dataset/res.json";
import "./resturentdetails.css";
import { nanoid } from "nanoid";
import { FaVoteYea, FaCashRegister, FaCreditCard } from "react-icons/fa";

export const ReasturentComponent = (props) => {
  return (
    <>
      <div key={nanoid(4)} className="cardCont">
        <p id="min">Min-{props.min}</p>
        <div id="imgcont">
          <img src={props.image} alt={props.name} />
        </div>
        <div id="card">
          <p id={nanoid(4)} key={props.name} className="cardname">
            {props.name}
          </p>
          <p id={nanoid(5)} key={props.name} className="cardaddress">
            Location- {props.addr}
          </p>
          <span>
            <FaVoteYea /> {props.totalvotes} votes
          </span>
          <br />
          <span>{props.cardOnly ? <FaCreditCard /> : <FaCashRegister />}</span>
          <p id="vote">vote-{props.min}</p>
        </div>
      </div>
    </>
  );
};

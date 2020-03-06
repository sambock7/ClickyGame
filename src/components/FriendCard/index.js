import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">

            <p className="name">{props.name}</p>

      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
x
      </span>
    </div>
  );
}

export default FriendCard;

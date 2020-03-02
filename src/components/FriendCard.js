import React from "react";
// import "./style.css";

function FriendCard(props) {
    return (
        <div
            className="card" id="card"
            key={props.id}
            onClick={() => props.handleKlick(props.id, props.klicked)}
        >
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
        </div>
    );
}

export default FriendCard;

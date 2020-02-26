import React from "react";
// Add style later 
// import "./style.css";

function FriendCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
            <div className="content">
                id: {props.id}
                {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
                𝘅
      </span> */}
            </div>
        </div>
    );
}

export default FriendCard;

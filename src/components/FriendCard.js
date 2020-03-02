import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
// Add style later 
// import "./style.css";

function FriendCard(props) {
    return (
        <div
            className="card" id="card"
            key={props.id}
            onClick={() => props.handleClick(props.id, props.clicked)}
        >
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
        </div>
    );
}

export default FriendCard;

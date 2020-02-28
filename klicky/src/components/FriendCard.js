import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
// Add style later 
// import "./style.css";

function FriendCard(props) {
    return (
        <Col sm="3">


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
        </Col>
    );
}

export default FriendCard;

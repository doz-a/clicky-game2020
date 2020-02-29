import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
// Add style later 
// import "./style.css";

function FriendCard(props) {
    return (
        <Col sm="3" id="col">


            <div className="card" id="card">
                <div className="img-container">
                    <img alt={props.id} src={props.image} />
                </div>
                <div className="content">
                    id: {props.id}

                </div>
            </div>
        </Col>
    );
}

export default FriendCard;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';
import friends from './friends.json';
import FriendCard from './components/FriendCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  state = {
    // json 
    friends,
    score: 0,
    topScore: 0,
    message: "Click a food to start the game :)"
  };

  handleClick = (id, clicked) => {
    console.log("click works" + this.state.id)
  }

  render() {
    return (
      <Container fluid id="container">
        <Header />
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />

        <Timer />
        <br />
        <Row>
          <Col>
            <p>{this.state.message}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>testd Current Score: {this.state.score} || Your Best Score: {this.state.topScore}</p>
          </Col>
        </Row>
        <Row>


          {/* Card Holder */}
          {this.state.friends.map(friend => (
            <Col sm="3" id="col">
              <FriendCard
                id={friend.id}
                key={friend.id}
                image={friend.image}
                clicked={friend.clicked}
                handleClick={this.handleClick}
              />
            </Col>
          ))
          }
          {/* End Card Holder  */}
        </Row>

        <Footer />
      </Container>
    )

  }

}

export default App;

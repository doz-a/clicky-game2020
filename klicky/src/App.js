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
    friends,
    score: 0,
    topScore: 0,
    message: "Click a food to start the game :)"
  };

  handleClick = (id, clicked) => {
    const imageOrder = this.state.images;
    if (clicked) {
      imageOrder.forEach((image, index) => {
        imageOrder[index].clicked = false;
      });
      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.)
      })
    }
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
            <p>Current Score: {this.state.score} || Your Best Score: {this.state.topScore}</p>
          </Col>
        </Row>
        <Row>


          {/* Card Holder */}
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
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

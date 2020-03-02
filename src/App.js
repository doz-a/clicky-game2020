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
    // JSON
    friends,
    score: 0,
    topScore: 0,
    message: "Click a food to start the game :)"
  };

  handleClick = (id, clicked) => {
    const friendsOrder = this.state.friends;
    // console.log("click works" + JSON.stringify(friendsOrder))

    // Resets game 
    if (clicked) {
      friendsOrder.forEach((friend, index) => {
        friendsOrder[index].clicked = false;
      });
      // Randomizer 
      return this.setState({
        friend: friendsOrder.sort(() => Math.random() - 0.5),
        message: "Wrong Guess!",
        score: 0
      })
    }
    else {
      friendsOrder.forEach((friend, index) => {
        if (id === friend.id) {
          friendsOrder[index].clicked = true;
        }
      });

      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return this.setState({
        friend: friendsOrder.sort(() => Math.random() - .5),
        message: "Good Guess!",
        score: newScore,
        topScore: newTopScore,
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

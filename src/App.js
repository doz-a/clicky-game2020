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
    message: "Klick on each image only once, and try to get the top score! Klick a food to start the game :)"
  };

  handleKlick = (id, klicked) => {
    const friendsOrder = this.state.friends;
    // console.log("klick works" + JSON.stringify(friendsOrder))

    // Win statement (if you can get there)
    if (this.state.score === 12) {
      return this.setState({
        message: "You win! You have the memory of an elephant!"
      })
    }

    else if (klicked) {
      friendsOrder.forEach((friend, index) => {
        friendsOrder[index].klicked = false;
      });
      // Randomizer 
      return this.setState({
        friend: friendsOrder.sort(() => Math.random() - 0.5),
        message: "Wrong Guess! Try playing again :)",
        score: 0
      })
    }

    else {
      friendsOrder.forEach((friend, index) => {
        if (id === friend.id) {
          friendsOrder[index].klicked = true;
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

        <Row>
          <Col>
            {/* Game message  */}
            <p>{this.state.message}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Your Current Score: {this.state.score} || Your Best Score: {this.state.topScore}</p>
          </Col>
        </Row>
        <Row>
          {this.state.friends.map(friend => (
            <Col sm="2" id="col">
              <FriendCard
                id={friend.id}
                key={friend.id}
                image={friend.image}
                klicked={friend.klicked}
                handleKlick={this.handleKlick}
              />
            </Col>
          ))
          }
        </Row>
        <br />

        <Footer />
      </Container>
    )

  }

}

export default App;

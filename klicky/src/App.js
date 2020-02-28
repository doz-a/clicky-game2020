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
    friends
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col>
              1 col
            </Col>
            <Col>
              2 Col
            </Col>
          </Row>
        </Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          Welcome to the klicky game

      <Timer />
          <a
            className="App-link"
            href="https://github.com/doz-a/clicky-game2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
      </a>

          <div>
            <Row>
              {this.state.friends.map(friend => (
                <FriendCard
                  id={friend.id}
                  key={friend.id}
                  image={friend.image}
                />
              ))
              }
            </Row>
          </div>

        </header>

        <Footer />
      </div>
    )

  }

}

export default App;

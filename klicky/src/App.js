import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';
import friends from './friends.json';
import FriendCard from './components/FriendCard';

class App extends Component {
  state = {
    friends
  };
  render() {
    return (
      <div className="App">
        <Header />
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
            {this.state.friends.map(friend => (
              <FriendCard
                // removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                // name={friend.name}
                image={friend.image}
              // occupation={friend.occupation}
              // location={friend.location}
              />
            ))
            }
          </div>

        </header>

        <Footer />
      </div>
    )

  }

}

export default App;

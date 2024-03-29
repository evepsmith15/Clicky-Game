import React, { Component } from "react"; 
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component { //holds the cards, score and highscore for the game
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => { //when you get a game over
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => { //what triggers the game
    this.state.cards.find((w, i) => {
      if (w.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver(); //pick wrong and its a game over 
        }
      }
    });
  }

  render() { //This shows the title and all the other items from the card json
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Fire Emblem Heroes (Clicky)</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
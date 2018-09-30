import Chat from "./components/chatbot";
import Menu from "./components/menu";
import HomeContent from "./components/homeContent";
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <HomeContent/>
        <Chat/>
      </div>
    );
  }
}

export default App;

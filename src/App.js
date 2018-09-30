import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';
import { Steps } from "./DataSet";
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatBot steps={Steps} />
      </div>
    );
  }
}

export default App;

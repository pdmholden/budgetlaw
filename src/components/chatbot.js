import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';
import { Steps } from "../DataSet";
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#FFFFFF',
  fontFamily: 'Avenir Next',
  headerBgColor: '#1FCA74',
  headerFontColor: '#FFFFFF',
  headerFontSize: '15px',
  botBubbleColor: '#1FCA74',
  botFontColor: '#FFFFFF',
  userBubbleColor: '#788998',
  userFontColor: '#FFFFFF',
};

class Chat extends Component {
  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd({ steps, values }) {
    alert(`Link to flowchart.`);
  }

  state = {
    reload: false,
  }

  reloadChatBot() {
    this.setState({ reload: true }, () => {
      this.setState({ reload: false });
    });
  }

  render() {
    if (this.state.reload) {
      return <span />
    }

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={this.handleEnd}
          floating={true}
          headerTitle="Claire your assistant"
          recognitionEnable={true}
          steps={Steps}
        />
      </ThemeProvider>
    );
  }
}

export default Chat;

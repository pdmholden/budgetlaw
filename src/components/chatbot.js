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
          floating={true}
          headerTitle="Claire your assistant"
          steps={Steps}
        />
      </ThemeProvider>
    );
  }
}

export default Chat;

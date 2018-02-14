import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class UlpanApp extends Component {
  state = {
    words: [
      {
        he: 'mastomeret',
        en: 'I\'m stalling for time in a sentence',
        confidence: 0.6,
      },
      
      {
        he: 'kuh eeloo',
        en: 'liiiiiek',
        confidence: 0.9,
      },

      {
        he: 'combina',
        en: 'nepotistic in',
        confidence: 0.5,
      },

      {
        he: 'achla',
        en: 'yahoo',
        confidence: 0.1,
      },

      {
        he: 'lo nora',
        en: 'you are less important than me',
        confidence: 0.75,
      },

      {
        he: 'lo meshaneh',
        en: 'I have no idea what I\'m talking about',
        confidence: 0.3,
      },

      {
        he: 'oosh',
        en: 'woOOot',
        confidence: 0.5,
      },
    ],

    activeWord: '',
  }

  setActive = ( activeWord )=> this.setState({ activeWord })
  
  render() {
    const { words, activeWord } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        
        <ul className='list-of-words'>
          {
            words.map( ({ he, en }) => (
              <li key={he} name={he} onClick={()=> this.setActive(he)}>
                <div>{he}</div>
                <div className={(he === activeWord) ? 'active':''}>{en}</div>
              </li>
            ) )
          }
        </ul>
      </div>
    );
  }
}

export default UlpanApp;

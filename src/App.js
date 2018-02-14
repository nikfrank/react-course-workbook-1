import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class UlpanApp extends Component {
  state = {
    words: [
      'mastomeret',
      'kuh eeloo',
      'combina',
      'achla',
      'lo nora',
      'lo meshaneh',
      'oosh',
    ]
  }

  
  render() {
    const { words } = this.state;
    
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        
        <div className='list-of-words'>
          {
            words.map( word => (
              <p key={word}>
                {word}
              </p>
            ) )
          }
        </div>
      </div>
    );
  }
}

export default UlpanApp;

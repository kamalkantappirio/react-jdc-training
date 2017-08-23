import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends Component {

  state ={
    sidebarMenu : [
      { name: 'Home',
        id: '12'
      },
      { name: 'Home',
      id: '12'
      }
    ]
  }

  onHeaderClick = event => {
    event.preventDefault();
    window.alert('You pressed the header');
  };

  render() {
    return (
      <div className="App">
        <Header title="Welcome to React JDC Training" onHeaderClick={this.onHeaderClick} />
        <Content text="Jaipur is awesome" />
        <Sidebar text="Jaipur is awesome" sidebarMenu={this.state.sidebarMenu} />
      </div>
    );
  }
}

export default App;

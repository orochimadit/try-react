import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header'
import Footer from './Footer'
import List from './List'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header list="3 terbaik"/>
        <p>test</p>
        <List/>
        <Footer name="masakan nusantara" tahun="1992"/>
      </div>
    );
  }
}

export default App;

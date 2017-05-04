import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class UserList extends Component {
  render() {
    return (
      <div className="user-list">
        <h1> Github users @ {this.props.organization} </h1>
        <ul>
          {this.props.userList.map(function(listValue){
            return <li>{listValue}</li>;
          })}          
        </ul>
      </div>
    )
  }
}


class UserDetail extends Component {
  render() {
    return (
      <div className="user-detail">
        <div className="user-profile">
          <img src={this.props.userPicture} className="user-picture" alt={this.props.userName}>
        </div>
        <div className="user-repos">
        </div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    var organization='OptimData';
    var userList = ['Guillaume Thomas', 'David Bonnet', 'Alexandre Cazé'];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hey mon <code>ami</code>
        </p>
        <div className="User List">
          <UserList organization={organization} userList={userList}>
          </UserList>
        </div>
      </div>
    );
  }
}


export default App;

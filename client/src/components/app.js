import React, { Component } from 'react';
import Header from './header'
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <br />
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

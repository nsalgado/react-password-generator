import React, { Component } from 'react';
import './App.css'


class App extends Component {
  // Initialize state
  state = { passwords: [] };

  // Fetch password after first mount
  componentDidMount() {
    this.getPassword();
  }

  getPassword = () => {
    //Get the passwords and store them in state
    fetch('/api/passwords')
      .then(response => response.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;
    console.log({ passwords });
    return (
      <div className="App">
        {passwords.length ? (
        <div>
          <h1> 5 Passwords. </h1>
          <ul className="passwords">
            {passwords.map((password, index) =>
              <li key={index}>
                {password}
              </li>
            )}
          </ul>

          <button
            className="more"
            onClick={this.getPassword}
          >
            Get More
          </button>
        </div>
      ) : (
        // Error message, no passwords
        <div>
          <h1>No passwords </h1>
          <button
            className="more"
            onClick={this.getPassword()}
          >
            Try Again?
          </button>
        </div>
      )}
      </div>
    );
  }
}

export default App;
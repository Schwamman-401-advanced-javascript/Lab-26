import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/app.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1});
  }

  render() {
    if (this.state.counter > 0 && this.state.counter <= 5) {
      document.getElementById('counter').style.backgroundColor = 'rgba(113, 225, 76, .25)';
    } else if (this.state.counter > 5 && this.state.counter <= 10) {
      document.getElementById('counter').style.backgroundColor = 'rgba(113, 225, 76, .50)';
    } else if (this.state.counter > 10 && this.state.counter <= 15) {
      document.getElementById('counter').style.backgroundColor = 'rgba(113, 225, 76, .75)';
    } else if (this.state.counter > 15) {
      document.getElementById('counter').style.backgroundColor = 'rgba(113, 225, 76, 1)';
    } else if (this.state.counter < 0 && this.state.counter >= -5) {
      document.getElementById('counter').style.backgroundColor = 'rgba(188, 32, 45, .25)';
    } else if (this.state.counter < -5 && this.state.counter >= -10) {
      document.getElementById('counter').style.backgroundColor = 'rgba(188, 32, 45, .50)';
    } else if (this.state.counter < -10 && this.state.counter >= -15) {
      document.getElementById('counter').style.backgroundColor = 'rgba(188, 32, 45, .75)';
    } else if (this.state.counter < -15) {
      document.getElementById('counter').style.backgroundColor = 'rgba(188, 32, 45, 1)';
    } else if(document.getElementById('counter')){
      document.getElementById('counter').style.backgroundColor = 'yellow';
    }
   


    return (
      <div>
        <h4 id="counter">{this.state.counter}</h4>
        <button id="increment" onClick={this.incrementClick}>Increment</button>
        <button id="decrement" onClick={this.decrementClick}>Decrement</button>
      </div>
    );
  }


}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

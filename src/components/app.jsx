import React from 'react';
import Cities from './cities';
import newCities from '../updaters/new-cities';
import newCount from '../updaters/new-count';
import randomCities from '../utils/random-cities';

export default class App extends React.Component {
  state = {
    cities: randomCities(10),
    count: 10,
  }

  handleNewClick = () => {
    this.setState(newCities);
  }

  handleCountChange = (event) => {
    this.setState(newCount.bind(null, event.target.value));
  }

  render() {
    return (
      <div>
        <Cities cities={this.state.cities} />
        <button onClick={this.handleNewClick} type="button">
          New Cities
        </button>
        <input
          min="2"
          max="50"
          onChange={this.handleCountChange}
          type="number"
          value={this.state.count}
        />
      </div>
    );
  }
}

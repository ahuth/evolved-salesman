import React from 'react';
import Cities from './cities';
import newCities from '../updaters/new-cities';
import newCount from '../updaters/new-count';
import newSolution from '../updaters/new-solution';
import randomCities from '../utils/random-cities';

export default class App extends React.Component {
  state = {
    cities: randomCities(10),
    count: 10,
    path: undefined,
  }

  handleNewClick = () => {
    this.setState(newCities);
  }

  handleCountChange = (event) => {
    this.setState(newCount.bind(null, event.target.value));
  }

  handleSolveClick = () => {
    this.setState(newSolution);
  }

  render() {
    return (
      <div>
        <Cities cities={this.state.cities} path={this.state.path} />
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
        <button onClick={this.handleSolveClick} type="button">
          Solve!
        </button>
      </div>
    );
  }
}

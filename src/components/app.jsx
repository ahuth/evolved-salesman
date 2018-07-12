import React from 'react';
import Cities from './cities';
import Controls from './controls';
import newCities from '../updaters/new-cities';
import newCount from '../updaters/new-count';
import newRandomSolution from '../updaters/new-random-solution';
import newSolution from '../updaters/new-solution';
import randomCities from '../utils/random-cities';

export default class App extends React.Component {
  state = {
    cities: randomCities(10),
    cost: undefined,
    count: 10,
    path: undefined,
  }

  handleNewClick = () => {
    this.setState(newCities);
  }

  handleCountChange = (event) => {
    this.setState(newCount.bind(null, event.target.value));
  }

  handleRandomClick = () => {
    this.setState(newRandomSolution);
  }

  handleSolveClick = () => {
    this.setState(newSolution);
  }

  render() {
    return (
      <div>
        <Cities
          cities={this.state.cities}
          path={this.state.path}
        />
        <Controls
          onCountChange={this.handleCountChange}
          onNewClick={this.handleNewClick}
          onRandomClick={this.handleRandomClick}
          onSolveClick={this.handleSolveClick}
          count={this.state.count}
        />
        {this.state.cost && (
          <span>Distance: {this.state.cost}</span>
        )}
      </div>
    );
  }
}

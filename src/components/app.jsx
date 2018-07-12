import React from 'react';
import Cities from './cities';
import Controls from './controls';
import clearSolution from '../updaters/clear-solution';
import newCities from '../updaters/new-cities';
import newCount from '../updaters/new-count';
import newRandomSolution from '../updaters/new-random-solution';
import newSolution from '../updaters/new-solution';
import randomCities from '../utils/random-cities';

export default class App extends React.Component {
  state = {
    bestCost: undefined,
    cities: randomCities(10),
    currentCost: undefined,
    count: 10,
    path: undefined,
  }

  handleNewClick = () => {
    this.setState(newCities);
  }

  handleClearClick = () => {
    this.setState(clearSolution);
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
          onClearClick={this.handleClearClick}
          onCountChange={this.handleCountChange}
          onNewClick={this.handleNewClick}
          onRandomClick={this.handleRandomClick}
          onSolveClick={this.handleSolveClick}
          count={this.state.count}
        />
        {this.state.currentCost && (
          <React.Fragment>
            <div>Current Distance: {this.state.currentCost}</div>
            <div>Best Distance: {this.state.bestCost}</div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

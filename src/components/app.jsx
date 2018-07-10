import React from 'react';
import Cities from './cities';
import Controls from './controls';
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
        <Cities
          cities={this.state.cities}
          path={this.state.path}
        />
        <Controls
          onCountChange={this.handleCountChange}
          onNewClick={this.handleNewClick}
          onSolveClick={this.handleSolveClick}
          count={this.state.count}
        />
      </div>
    );
  }
}

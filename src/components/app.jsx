import React from 'react';
import Cities from './cities';
import randomCities from '../utils/random-cities';

export default class App extends React.Component {
  state = {
    cities: randomCities(10),
  };

  handleNewClick = () => {
    this.setState({ cities: randomCities(10) });
  }

  render() {
    return (
      <div>
        <Cities cities={this.state.cities} />
        <button onClick={this.handleNewClick} type="button">
          New Cities
        </button>
      </div>
    );
  }
}

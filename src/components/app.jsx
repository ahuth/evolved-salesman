import React from 'react';
import Cities from './cities';
import randomCities from '../utils/random-cities';

export default class App extends React.Component {
  state = {
    cities: randomCities(10),
    count: 10,
  }

  handleNewClick = () => {
    this.setState((prevState) => {
      return {
        cities: randomCities(prevState.count),
      };
    });
  }

  handleCountChange = (event) => {
    const value = event.target.value;

    this.setState((prevState) => {
      const diff = value - prevState.count;

      if (diff < 0) {
        const newLength = prevState.cities.length + diff;

        return {
          cities: prevState.cities.slice(0, newLength),
          count: value,
        };
      } else {
        const newCities = randomCities(diff);

        return {
          cities: prevState.cities.concat(newCities),
          count: value,
        };
      }
    });
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

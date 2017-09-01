import React, { Component } from 'react';
import axios from 'axios';

import Food from '../components/Food';

let foodId = 0;

class FoodLog extends Component {
  state = {
    foods: []
  };

  handleFoodSubmit = e => {
    e.preventDefault();
    const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    const headers = {
      'x-app-id': 'a2af49ca',
      'x-app-key': '6c84a67850803b4cdf0d5cd5c8bf91e5',
      'x-remote-user-id': '0'
    };

    const query = `${this.gramsInput.value} ${this.foodInput.value}`;
    console.log(query);
    const data = {
      query,
      timezone: 'US/Western'
    };
    const method = 'post';

    axios({
      url,
      method,
      headers,
      data
    })
      .then(result => {
        const oldState = this.state.foods.slice();
        const foodItem = result.data.foods[0];
        console.log(foodItem);
        this.setState({
          foods: [...oldState, foodItem]
        });
      })
      .catch(error => console.error(error));
    this.foodInput.value = '';
    this.gramsInput.value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleFoodSubmit(e)}>
          <input
            type="text"
            placeholder="Enter what you ate"
            ref={value => {
              this.foodInput = value;
            }}
            required
          />
          <input
            type="text"
            placeholder="How much did you eat?"
            ref={value => {
              this.gramsInput = value;
            }}
            required
          />
          <input type="submit" />
        </form>
        <table className="display-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount(g)</th>
              <th>Calories</th>
              <th>Total Fat(g)</th>
              <th>Carbohydrates(g)</th>
              <th>Protein(g)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.foods.map(food => {
              foodId += 1;
              return <Food key={foodId} {...food} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FoodLog;

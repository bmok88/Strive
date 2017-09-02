import React, { Component } from 'react';
import axios from 'axios';

import Food from '../components/Food';
import Totals from '../components/Totals';
import AddFood from '../components/AddFood';
import FoodLogDay from '../components/FoodLogDay';
import FoodTableHeaders from '../components/FoodTableHeaders';

let foodId = 0;

class FoodLog extends Component {
  state = {
    foods: [],
    totalCalories: 0,
    totalFat: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalAmount: 0,
    date: new Date()
  };

  handleFoodSubmit = e => {
    e.preventDefault();
    const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    const headers = {
      'x-app-id': 'a2af49ca',
      'x-app-key': '6c84a67850803b4cdf0d5cd5c8bf91e5',
      'x-remote-user-id': '0'
    };
    const query = `${e.target.children[0].value} ${e.target.children[1].value}`;

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
    }).then(result => {
      const oldState = this.state.foods.slice();
      const foodItem = result.data.foods[0];
      const totalCalories = this.state.totalCalories + foodItem.nf_calories;
      const totalFat = this.state.totalFat + foodItem.nf_total_fat;
      const totalProtein = this.state.totalProtein + foodItem.nf_protein;
      const totalCarbs = this.state.totalCarbs + foodItem.nf_total_carbohydrate;
      const totalAmount =
        this.state.totalAmount + foodItem.serving_weight_grams;

      this.setState({
        foods: [...oldState, foodItem],
        totalCalories,
        totalFat,
        totalProtein,
        totalCarbs,
        totalAmount
      });
    });
    e.target.children[0].value = '';
    e.target.children[1].value = '';
  };

  handleDayChange = (e, action) => {
    e.preventDefault();
    const today = this.state.date;

    if (action === 'next') {
      today.setDate(today.getDate() + 1);
    } else {
      today.setDate(today.getDate() - 1);
    }

    this.setState({
      foods: [],
      totalCalories: 0,
      totalFat: 0,
      totalProtein: 0,
      totalCarbs: 0,
      totalAmount: 0,
      date: today
    });
  };

  render() {
    return (
      <div className="foodLog">
        <AddFood handleFoodSubmit={this.handleFoodSubmit} />
        <FoodLogDay
          handleDayChange={this.handleDayChange}
          date={this.state.date}
        />
        <table className="foodTable">
          <FoodTableHeaders />
          <tbody>
            {this.state.foods.map(food => {
              foodId += 1;
              return <Food key={foodId} {...food} date={this.state.date} />;
            })}
            <Totals
              totalAmount={this.state.totalAmount}
              totalCalories={this.state.totalCalories}
              totalFat={this.state.totalFat}
              totalCarbs={this.state.totalCarbs}
              totalProtein={this.state.totalProtein}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default FoodLog;

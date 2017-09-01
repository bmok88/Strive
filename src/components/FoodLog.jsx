import React, { Component } from 'react';
import axios from 'axios';

const NutritionixAppID = 'a2af49ca';
const NutritionixAppKey = '6c84a67850803b4cdf0d5cd5c8bf91e5';

class FoodLog extends Component {
  state = {
    foods: []
  };

  handleFoodSubmit = e => {
    e.preventDefault();
    const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    const headers = {
      'x-app-id': NutritionixAppID,
      'x-app-key': NutritionixAppKey,
      'x-remote-user-id': '0'
    };
    const data = {
      query: this.foodInput.value,
      timezone: 'US/Western'
    };
    const method = 'post';

    axios({
      url,
      method,
      headers,
      data
    })
      .then(result => console.log(result))
      .catch(error => console.error(error));
    // axios
    //   .post(url, data, headers)
    //   .then(result => console.log(result))
    //   .catch(error => console.error(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleFoodSubmit(e)}>
          <input
            type="text"
            placeholder="Enter what you ate and how much"
            ref={value => {
              this.foodInput = value;
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
              <th>Fat(g)</th>
              <th>Carbohydrates(g)</th>
              <th>Protein(g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avocado</td>
              <td>150</td>
              <td>200</td>
              <td>30</td>
              <td>8</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FoodLog;

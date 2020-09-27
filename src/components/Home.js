import React from "react";
import Restaurant from "./Restaurant";
class Home extends React.Component {
  constructor(props) {
    super();
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      query: "",
      search: "manipal",
      restaurant: [],
      entity_id: null,
      entity_type: null
    };
  }
  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      search: this.state.query
    });

    fetch(
      `https://developers.zomato.com/api/v2.1/locations?query=${this.state.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-key": "067aea5cc66261e0a6d58e607dd9a3af"
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        fetch(
          `https://developers.zomato.com/api/v2.1/location_details?entity_id=${data.location_suggestions[0].entity_id}&entity_type=${data.location_suggestions[0].entity_type}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "user-key": "067aea5cc66261e0a6d58e607dd9a3af"
            }
          }
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              restaurant: data.best_rated_restaurant
            });
          });
      });
  };

  componentDidMount() {
    fetch(
      `https://developers.zomato.com/api/v2.1/location_details?entity_id=11299&entity_type=city`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-key": "067aea5cc66261e0a6d58e607dd9a3af"
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          restaurant: data.best_rated_restaurant
        });
      });
  }

  render() {
    const textfield = (
      <form onSubmit={this.handleSubmit}>
        <input
          id="searchBar"
          placeholder="Enter your city"
          onChange={this.handleChange}
        />
        <button id="search"> Search </button>
      </form>
    );

    return (
      <div className="home">
        <div className="heading">
          <div> Top Restaurants in {this.state.search}</div>
          <div> {textfield}</div>
        </div>
        <div className="restaurants">
          {this.state.restaurant.map((rest, index) => {
            return (
              <Restaurant
                title={rest.restaurant.name}
                rating={rest.restaurant.user_rating.aggregate_rating}
                image={rest.restaurant.thumb}
                avgcost={rest.restaurant.average_cost_for_two}
                cuisine={rest.restaurant.cuisines}
                resid={rest.restaurant.id}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;

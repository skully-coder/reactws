import React from "react";
import { Link } from "react-router-dom";
class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(
      `https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.match.params.id}`,
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
        this.setState({ data: data });
        console.log(data);
      });
  }
  render() {
    let imgsrc =
      this.props.image === ""
        ? "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
        : this.state.data.featured_image;
    return (
      <div className="mainDetails">
        <Link to="/">
          <button> Back To Home </button>
        </Link>
        <div className="container">
          <img src={imgsrc} alt="Imgforres" className="image" />
          <div className="text">
            <div className="detailText">
              <h1> {this.state.data.name} </h1>
              <h3>Timings: {this.state.data.timings}</h3>
              <h3>Cuisines: {this.state.data.cuisines}</h3>
              <h3>Contact: {this.state.data.phone_numbers}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;

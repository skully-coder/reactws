import React from "react";
import { Link } from "react-router-dom";
class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true,
      likes: this.props.likes
    };
  }

  render() {
    let button;
    if (this.state.liked === true) {
      button = (
        <div
          onClick={() => {
            this.setState((prevState) => {
              return {
                likes: prevState.likes + 1,
                liked: !prevState.liked
              };
            });
          }}
        >
          <span className="likes" role="img" aria-label="like">
            {" "}
            👍 {this.state.likes} liked{" "}
          </span>
        </div>
      );
    } else {
      button = (
        <div
          onClick={() => {
            this.setState((prevState) => {
              return {
                likes: prevState.likes - 1,
                liked: !prevState.liked
              };
            });
          }}
        >
          <span className="likes" role="img" aria-label="like">
            {" "}
            👎 {this.state.likes} liked{" "}
          </span>
        </div>
      );
    }

    const url =
      "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg";
    const img = this.props.image === "" ? url : this.props.image;
    return (
      <div className="card">
        <img src={img} className="cardimg" alt="ImageforRes" />

        <div className="details">
          <Link to={`/res_details/${this.props.resid}`}>
            <h3>{this.props.title}</h3>
          </Link>
          <h4> {this.props.cuisine}</h4>
          <p className="ratings"> {this.props.rating} / 5 </p>

          <p className="avgcost"> Average Cost for two {this.props.avgcost}</p>
        </div>
        {button}
      </div>
    );
  }
}

export default Restaurant;

import React from "react";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
        <span className="title"> Let's React </span>
      </div>
    );
  }
}

export default NavigationBar;

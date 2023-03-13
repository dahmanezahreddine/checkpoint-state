import React, { Component } from "react";

export default class Checkpointstate extends Component {
  state = {
    FullName: "Vladimir Poutine",
    Bio: "Président de la fédération de Russie",
    ImgSrc: "./images/Vladimir_Putin_(2020-02-20).jpg",
    Show: false,
    count: 0,
  };

  click = () => {
    this.setState({ Show: !this.state.Show });
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <>
        <div>Time en seconde: {this.state.count}</div>
        <button onClick={this.click}>Show</button>
        {this.state.Show && (
          <div>
            <h1>{this.state.FullName}</h1>
            <h3>{this.state.Bio}</h3>
            <img src={this.state.ImgSrc} alt="sgdf"></img>
          </div>
        )}
      </>
    );
  }
}

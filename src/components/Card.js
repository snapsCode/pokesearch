import React, { Component } from "react";
// import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.name = this.props;
    this.state = { img: "" };
  }

  async componentDidMount() {
    try {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.props.name}`
      );
      const data = await resp.json();
      this.setState({ img: data.sprites.front_default });
    } catch (error) {
      console.log("oops.", error);
    }
  }

  render() {
    return (
      <div className=" bg-emerald-500 flex overflow-hidden py-4 h-36">
        <div className="flex place-items-center m-4">
          <img
            className=""
            alt={`${this.props.name}_img`}
            src={this.state.img}
          ></img>
        </div>
        <h1 className="text-center">{this.props.name}</h1>
      </div>
    );
  }
}

export default Card;

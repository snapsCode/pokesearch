import React, { Component } from "react";
import "./App.scss";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import * as fetchPokemon from "../components/FetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import NavBar from "../components/NavBar";
import ButtonList from "../components/ButtonList";
// import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchField: "",
      filteredList: [],
      currentGen: 1,
    };
  }

  componentDidMount = async () => {
    this.handleGen(1);
  };

  filter = () => {
    const { pokemon, searchField } = this.state;
    const filteredList = pokemon.filter((mon) =>
      mon.name.toLowerCase().startsWith(searchField.toLowerCase())
    );
    return filteredList;
  };

  handleGen = async (gen = 1) => {
    this.setState({ pokemon: [] });
    const data = await fetchPokemon.getGen(gen);
    this.setState({ pokemon: data, currentGen: gen });
  };

  handleChange = async (e) => {
    this.setState({ searchField: e.target.value });
  };
  // handleSubmit = (e) => {
  //   this.setState({ submittion: this.state.searchField });
  // };
  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
        <ErrorBoundary>
          <NavBar handleChange={this.handleChange} />
          {!pokemon.length ? (
            <LoadingScreen />
          ) : (
            <div className="">
              <ButtonList
                handleGen1={() => this.handleGen(1)}
                disableGen1={this.state.currentGen === 1}
                handleGen2={() => this.handleGen(2)}
                disableGen2={this.state.currentGen === 2}
                handleGen3={() => this.handleGen(3)}
                disableGen3={this.state.currentGen === 3}
                handleGen4={() => this.handleGen(4)}
                disableGen4={this.state.currentGen === 4}
                handleGen5={() => this.handleGen(5)}
                disableGen5={this.state.currentGen === 5}
                handleGen6={() => this.handleGen(6)}
                disableGen6={this.state.currentGen === 6}
                handleGen7={() => this.handleGen(7)}
                disableGen7={this.state.currentGen === 7}
                handleGen8={() => this.handleGen(8)}
                disableGen8={this.state.currentGen === 8}
                handleGen9={() => this.handleGen(9)}
                disableGen9={this.state.currentGen === 9}
              />
              {/* <Scroll> */}
              <CardList list={this.filter()} />
              {/* </Scroll> */}
            </div>
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

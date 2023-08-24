import React, { Component } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import { getData } from "../components/fetchPokemon";

class App extends Component {
  constructor() {
    super();
    this.state = { pokemon: [], searchField: "", filteredList: [] };
  }

  async componentDidMount() {
    try {
      const data = await getData(151, 0);
      this.setState({ pokemon: data });
    } catch (e) {
      console.log("oops", e);
    }
  }

  filter = () => {
    const { pokemon, searchField } = this.state;
    const filteredList = pokemon.filter((mon) =>
      mon.name.toLowerCase().startsWith(searchField.toLowerCase())
    );
    return filteredList;
  };

  handleChange = async (e) => {
    this.setState({ searchField: e.target.value });
  };
  handleSubmit = (e) => {
    this.setState({ submittion: this.state.searchField });
  };
  render() {
    const { pokemon } = this.state;
    // this.filter();

    // const filteredList = this.filter();
    // console.log('filteredlist', filteredList);
    return (
      <div className="App">
        <ErrorBoundary>
          <nav className="flex justify-end space-x-4 bg-slate-600 mb-4">
          <h1>Pokedex Search!</h1>
            <SearchBox
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </nav>
          {!pokemon.length ? (
            <div className=" h-screen">
              <img
                className="m-auto h-3/5"
                alt="loading..."
                src="https://art.ngfiles.com/images/1749000/1749749_coochiem8_made-a-little-pokeball-loop.gif?f1618388656"
              ></img>
            </div>
          ) : (
            <CardList list={this.filter()} />
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

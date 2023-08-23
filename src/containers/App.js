import React, { Component } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import { getData } from "../components/FetchPokemon";

class App extends Component {
  constructor() {
    super();
    this.state = { pokemon: [], searchField: "" };
  }

  async componentDidMount() {
    try {
      const data = await getData();
      this.setState({ pokemon: data });
    } catch (e) {
      console.log("oops", e);
    }
  }

  async filter() {
    const { pokemon, searchField } = await this.state;
    const filteredList = await pokemon.filter((mon) =>
      mon.name.toLowerCase().startsWith(searchField.toLowerCase())
    );
    return filteredList;
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  handleSubmit = (e) => {
    this.setState({ submittion: this.state.searchField });
  };
  render() {
    const { pokemon, searchField } = this.state;
    const filteredList = pokemon.filter((item) => {
      return item.name.toLowerCase().startsWith(searchField.toLowerCase());
    });
    // const filteredList = this.filter();
    // console.log('filteredlist', filteredList);
    return !pokemon.length ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="App">
        <ErrorBoundary>
          <nav className="flex justify-end space-x-4 bg-slate-600 mb-4">
            <SearchBox
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </nav>
          <CardList list={filteredList} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

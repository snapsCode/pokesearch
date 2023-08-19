import React, { Component } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = { pokemon: [], searchField: "" };
  }

  async componentDidMount() {
    const resp = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const data = await resp.json();
    await this.setState({ pokemon: data.results });
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredList = this.state.pokemon.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return !this.state.pokemon.length ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="App">
        <ErrorBoundary>
          <nav className="flex justify-end space-x-4 bg-slate-600">
            <SearchBox searchChange={this.onSearchChange} />
          </nav>
          <CardList list={filteredList} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

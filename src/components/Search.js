import React, { Component } from "react";

class Search extends Component {
  state = { artistQuery: "" };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };
  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="type to search"
        />
        <button onClick={this.searchArtist}>search</button>
      </div>
    );
  }
}

export default Search;

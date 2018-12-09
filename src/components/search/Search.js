import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "10945930-c4aaf91b74f71b5aef460544e",
    images: []
  };
  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.handleChange}
          floatingLabelText="Search for images..."
          fullWidth="true"
        />
      </div>
    );
  }
}

export default Search;

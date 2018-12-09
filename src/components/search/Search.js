import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "10945930-c4aaf91b74f71b5aef460544e",
    images: []
  };

  onTextChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        axios
          .get(
            `${this.state.apiUrl}?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    );
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for images..."
          fullWidth="true"
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          onChange={this.onAmountChange}
          value={this.state.amount}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </SelectField>
      </div>
    );
  }
}

export default Search;

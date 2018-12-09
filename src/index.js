import React from "react";
import ReactDOM from "react-dom";
import MuiThemeBuilder from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MuiThemeBuilder>
          <div>
            <NavBar />
            <Search />
          </div>
        </MuiThemeBuilder>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

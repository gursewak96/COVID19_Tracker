import React, { Component } from "react";
import { Dashboard, Nav, Info } from "./components";
import styles from "./App.module.css";

import { connect } from "react-redux";
import { fetchData } from "./redux/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchData();
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/info" component={Info} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Details from './Details';
import Search from './Search';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      item: {
        title: '',
        src: '',
        description: '',
      },
    };
  }

  handleClickSeeMore= (item) => {
    const { title, description } = item.data[0];
    const showDetails = true;
    const src = item.links[0].href;
    const newItem = {
      title,
      description,
      src,
    };
    console.log('newItem', newItem);
    this.setState({
      item: newItem,
    });
    this.setState({ showDetails });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />

          <Route
            path="/search"
            render={() => (<Search
              handleClickSeeMore={this.handleClickSeeMore}
            />)}
          />

          <Route
            path="/details/:id"
            render={props =>
              <Details {...props} item={this.state.item} />}
          />


        </Switch>


      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps)(App);

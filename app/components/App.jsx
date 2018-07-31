import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Details from './Details';
import Search from './Search';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../redux/store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      showDetails: false,
      item: {
        title: '',
        src: '',
        description: '',
      },
    };
  }

  handleClickSeeMore= (item) => {
    console.log('Here in handleClickSeeMore');
    console.log('item', item);
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
              render={props => (<Search
                handleClickSeeMore={this.handleClickSeeMore}
                isSearching={this.state.isSearching}
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

const mapStateToProps= state => ({
  searchTerm: state.searchTerm
});

export default connect (mapStateToProps)(App);

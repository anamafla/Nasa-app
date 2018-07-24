import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Details from './Details';
import Search from './Search';
import { Provider } from 'react-redux';
import store from '../redux/store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      searchTerm: '',
      results: [],
      showDetails: false,
      item: {
        title: '',
        src: '',
        description: '',
      },
    };
  }

  handleSearchTermChange = event =>
  this.setState({ searchTerm: event.target.value });

  handleClick = event => {
    event.preventDefault();
    this.getFetchData();
    const isSearching = true;
    this.setState({ isSearching });
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

  // Getting data with axios
  getFetchData = () => {
    axios.get(`https://images-api.nasa.gov/search?q=${this.state.searchTerm}`)
    .then(response => {
      console.log(response.data.collection.items);
      const results = response.data.collection.items.filter(item => item.data[0].media_type === 'image');
      this.setState({ results, showDetails: false, isSearching: false });
    }).catch((error) => {
      console.log(error, 'failed to fetch data');
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (<Home
                {...props}
                handleSearchTermChange={this.handleSearchTermChange}
                handleClick={this.handleClick}
              />)}
            />

            <Route
              path="/search"
              render={props => (<Search
                {...props}
                handleSearchTermChange={this.handleSearchTermChange}
                handleClick={this.handleClick}
                handleClickSeeMore={this.handleClickSeeMore}
                results={this.state.results}
                searchTerm={this.state.searchTerm}
                isSearching={this.state.isSearching}
              />)}
            />

            <Route
              path="/details/:id"
              render={props =>
                <Details {...props} item={this.state.item} />}
            />


          </Switch>

        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;

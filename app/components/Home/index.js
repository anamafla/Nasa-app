import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DivStyled, DivArtStyled, SectionStyled } from './styles';
import { setSearchTerm, getData } from '../../redux/actions';

class Home extends Component {

  goToSearch = (event) => {
    event.preventDefault();
    this.props.handleClick();
    this.props.history.push('/search');
  }
  render() {
    return (
      <div>
        <DivStyled>
          <h1>
           NASA
          </h1>
          <h3>IMAGE LIBRARY</h3>
        </DivStyled>
        <DivStyled>
          <form onSubmit={this.goToSearch}>
            <input
              type="text"
              placeholder="Search"
              onChange={this.props.handleSearchTermChange}
              value={this.props.searchTerm}
            />
          </form>
          <Button variant="contained" onClick={this.goToSearch} >
            <Link to="/search">
           Search
            </Link>
          </Button>
        </DivStyled>
        <DivArtStyled>
          <h3>Explore the Universe through image library from Nasa</h3>
        </DivArtStyled>
        <SectionStyled>
          <h4>Somewhere, something incredible is waiting to be known</h4>
          <h4>Carl Sagan </h4>
        </SectionStyled>
      </div>
    );
  }

}

Home.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  handleClick() {
    dispatch(getData());
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

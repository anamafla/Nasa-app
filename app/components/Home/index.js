import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, DivStyled, DivArtStyled, SectionStyled } from './styles';
import { setSearchTerm, getData } from '../../redux/actions';

class Home extends Component {

  goToSearch = (event) => {
    event.preventDefault();
    this.props.handleClick();
    this.props.history.push('/search');
  }
  render() {
    return (
      <Wrapper>
        <DivStyled>
          <h1>
           NASA
          </h1>
          <h2>BROWSER</h2>
        </DivStyled>
        <DivStyled>
          <form onSubmit={this.goToSearch}>
            <input
              type="text"
              placeholder="Search for...(e.g. 'Nebula', 'Galaxy' )"
              onChange={this.props.handleSearchTermChange}
              value={this.props.searchTerm}
            />
          </form>
          <Button variant="contained" onClick={this.goToSearch} >
           Search
          </Button>
        </DivStyled>
        <DivArtStyled>
          Explore the Universe through image library from Nasa
        </DivArtStyled>
        <SectionStyled>
          <footer>
            <h4>Somewhere, something incredible is waiting to be known</h4>
            <h4>Carl Sagan </h4>
          </footer>
        </SectionStyled>
      </Wrapper>
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

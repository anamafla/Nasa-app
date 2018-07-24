import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DivStyled, DivArtStyled, SectionStyled } from './styles';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../redux/actions';

const Home = (props) => (
  <div>
    <DivStyled>
      <h1>
          NASA
      </h1>
      <h3>IMAGE LIBRARY</h3>
    </DivStyled>
    <DivStyled>
      <input
        type="text"
        placeholder="Search"
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
      />
      <Button variant="contained" onClick={props.handleClick} >
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

Home.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default Home;

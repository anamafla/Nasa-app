import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Results from '../Results';
import Header from '../Header';
import { setSearchTerm, getData } from '../../redux/actions';
import { DivStyled, SectionStyled } from './styles';

const Search = (props) => (
  <div>
    <Header
      resourceSearch
    />
    <SectionStyled>
      <div>
        <input
          placeholder="What are you looking for?"
          onChange={props.handleSearchTermChange}
          value={props.searchTerm}
          type="text"
        />
      </div>
      <div>
        <Button variant="contained" color="default" onClick={props.handleClick}>
           Search
        </Button>
      </div>
    </SectionStyled>
    <div>
      {props.resultsLoading ?
          (<CircularProgress />) :
          (<Fragment>
            {props.results.map(item =>
              (<Results
                key={item.data[0].nasa_id}
                {...item}
                handleClickSeeMore={props.handleClickSeeMore}
              />))}
            <div>
              {props.resultsMessage && <DivStyled>{ props.resultsMessage }</DivStyled>}
            </div>
          </Fragment>)}
    </div>
  </div>

  );


Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  resultsLoading: PropTypes.bool.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClickSeeMore: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  results: state.results,
  resultsLoading: state.resultsLoading,
  resultsMessage: state.resultsMessage,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  handleClick() {
    dispatch(getData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Results from '../Results';
import Header from '../Header';
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
      {props.results.length > 0 || (props.searchTerm === '') ?
        (<div>
          {props.results.map(item =>
            (<Results
              key={item.data[0].nasa_id}
              {...item}
              handleClickSeeMore={props.handleClickSeeMore}
            />))}
        </div>) : (props.isSearching === true) ?
          (<div>
            <CircularProgress />
          </div>) :
         (<DivStyled>
           <h2> No results have been found </h2>
         </DivStyled>)
       }
    </div>);


  </div>

    );

Search.propTypes = {
  searchTerm: PropTypes.string,
  results: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClickSeeMore: PropTypes.func.isRequired,
};


export default Search;

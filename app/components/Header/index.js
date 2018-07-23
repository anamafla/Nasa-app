
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';


const Header = (props) => {
  let utilSpace;

  if (props.resourceSearch) {
    utilSpace = (
      <span />
   );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
    Back
        </Link>
      </h2>
);
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <h2>
          <Link to="/">
        Home
          </Link>
        </h2>
        {utilSpace}
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  resourceSearch: false,
  searchTerm: '',
};

Header.propTypes = {
  resourceSearch: PropTypes.bool.isRequired,
};

export default Header;

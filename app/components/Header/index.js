
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const Header = (props) => {
  let utilSpace;

  if (props.resourceSearch) {
    utilSpace = (
      <span />
   );
  } else {
    utilSpace = (
      <Button href="/search" color="inherit">
        <Link to="/search">
    Back
        </Link>
      </Button>
);
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button href="/" color="inherit">
        Home
        </Button>
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

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { DivStyled } from './styles';
import Header from '../Header';

const Details = (props) => (
  <div >
    <Header />
    <DivStyled>
      <Typography variant="display2">{props.item.title}</Typography>
      <img alt={props.item.title} src={props.item.src} />
      <Typography variant="subheading" color="textSecondary">
        {props.item.description}
      </Typography>
      <Typography variant="subheading" color="textSecondary" />
    </DivStyled>
  </div>
);

Details.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Details;

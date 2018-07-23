import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Wrapper, CardStyled, CardMediaStyled, CardContentStyled } from './styles';

const Results = (props) => (
  <Wrapper to={`/details/${props.data[0].nasa_id}`}>
    <CardStyled key={props.data[0].nasa_id} >
      <CardMediaStyled>
        <img src={props.links[0].href} alt={props.data[0].title} />
      </CardMediaStyled>
      <CardContentStyled>
        <Typography variant="headline">{props.data[0].title}</Typography>
        <Typography variant="subheading" color="textSecondary">
          {props.data[0].description}
        </Typography>
        <Typography variant="subheading" color="textSecondary">
          {props.data[0].date_created}
        </Typography>
        <div>
          <Button onClick={() => props.handleClickSeeMore(props)}>SEE MORE </Button>
        </div>
      </CardContentStyled>
    </CardStyled>
  </Wrapper>
);

Results.propTypes = {
  data: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  handleClickSeeMore: PropTypes.func.isRequired,
};

export default Results;

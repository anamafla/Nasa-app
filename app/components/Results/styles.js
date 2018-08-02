import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
 text-decoration: none;
`;

export const CardStyled = styled(Card)`
  margin: 1rem 2rem 2rem 1rem;
  display: flex;
`;

export const CardMediaStyled = styled(CardMedia)`
img {
 width: 150px;
 height: 150px;
}
`;

export const CardContentStyled = styled(CardContent)`
Link {
text-decoration: none;
}
`;

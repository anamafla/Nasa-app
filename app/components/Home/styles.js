import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;


`;

export const DivStyled = styled.div`
  padding: 20px 0 20px 0;
  text-align: center;
  margin: 0 0 0 0;
  background-color: black;
  color: white;
  background: #000000;

  h1, h2 {
    font-family: 'Orbitron', sans-serif;
    font-size: 40px;
    font-weight: bold;
  }

  input {
    width: 40%;
    margin: 10px 0 20px 0;
    border-radius: 5px;
    background-color: light-gray;
    height: 20px;
  }

  Link {
    text-decoration: none;
  }
  `;


export const DivArtStyled = styled.div`
    display: flex;
    font-family: 'Jura', sans-serif;
    color: black;
    height: 300px;
    justify-content: center;
    align-items: center;
    background: white;
    font-size: 20px;
    font-weight: bold;
  }`;


export const SectionStyled = styled.section`
  font-family: 'Jura', sans-serif;
  font-style: italic;
  padding: 20px 0 20px 0;
  margin: 0 0 0 0;
  text-align: center;
  background: #757F9A;
  background: -webkit-linear-gradient(to bottom, #D7DDE8, #757F9A);
  background: linear-gradient(to bottom, #D7DDE8, #757F9A);

  div {
    padding: 10px 0 10px 0;
  }
`;

import React from 'react';
import { CssBaseline, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Calculator from './calculator';
import InfoCard from './info-card';
import getData from '../services/data-service';

const useStyles = makeStyles({
  container: {
    // height: '100vh',
    // background: 'red',
    display: 'flex',
  },
  flexBox: {
    display: 'flex',
    width: '100%',
    // background: 'aqua',
    margin: 20,
  },
  calculator: {
    flex: 2,
    marginRight: 20,
  },
  infoCard: {
    flex: 1,
  },
});

const App = () => {
  const clases = useStyles();

  getData().then(data => console.log(data));

  return (
    <>
      <CssBaseline />
      <Container className={clases.container}>
        <Box className={clases.flexBox}>
          <Box className={clases.calculator}>
            <Calculator />
          </Box>
          <Box className={clases.infoCard}>
            <InfoCard />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default App;

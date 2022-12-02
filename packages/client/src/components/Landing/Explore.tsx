import useResponsive from 'src/hooks/useResponsive';
import { Box, Button, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Zoom } from 'react-awesome-reveal';

import SectionContainer from '../Section/SectionContainer';
import SectionTitle from '../Section/SectionTitle';
import CardImage from '../Card/CardImage';
import ZCard from '../Card/Card';

const useStyles = makeStyles((theme: Theme) => ({
  Grid: {
    width: '100%',
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#202020',
    position: 'absolute',
    top: 0,

    [theme.breakpoints.down('sm')]: {
      position: 'static',
    },
  },

  GridContent: {
    margin: '0 auto',
    maxWidth: 940,
    paddingTop: 140,

    [theme.breakpoints.down('lg')]: {
      paddingTop: 60,
    },

    [theme.breakpoints.down(1000)]: {
      paddingLeft: 20,
      paddingRight: 20,
    },

    [theme.breakpoints.down('md')]: {
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },

    [theme.breakpoints.down(700)]: {
      paddingTop: 0,
    },
  },

  GridMiddle: {
    margin: '0 auto',
    maxWidth: 940,
    paddingTop: 140,

    [theme.breakpoints.down('lg')]: {
      paddingTop: 60,
    },

    [theme.breakpoints.down(976)]: {
      paddingTop: 50,
    },

    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },

    [theme.breakpoints.down(800)]: {
      paddingTop: 20,
    },

    [theme.breakpoints.down(700)]: {
      paddingTop: 0,
    },

    [theme.breakpoints.down(620)]: {},
  },

  TextTitle: {
    fontWeight: 700,
    fontSize: 32,
    paddingBottom: 56,

    [theme.breakpoints.down('lg')]: {
      paddingBottom: 40,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },

    [theme.breakpoints.down(740)]: {
      paddingBottom: 4,
    },

    [theme.breakpoints.down(647)]: {
      fontSize: 18,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      paddingBottom: 10,
    },
  },

  TextDescription: {
    fontSize: 17,
    lineHeight: '26px',
    paddingRight: 40,
    fontWeight: 300,
    opacity: 0.7,

    [theme.breakpoints.down(1024)]: {
      paddingRight: 100,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 15,
      paddingRight: 20,
    },

    [theme.breakpoints.down(658)]: {
      paddingRight: 8,
    },

    [theme.breakpoints.down(647)]: {
      fontSize: 13,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
}));

const Explore = () => {
  const classes = useStyles();
  const matchDownSm = useResponsive({ query: 'down', key: 'sm' });

  return (
    <Box component={'section'}>
      <SectionContainer backgroundColor="#F7F8FA">
        <SectionTitle title="Khám phá" />
        <Box sx={{ marginBottom: '24px' }}>
          <Typography sx={{ marginBottom: '20px' }} variant="h6">
            Đề xuất
          </Typography>
          <Grid container spacing={3}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <Grid key={index} item xs={6} sm={4} md={3}>
                <Zoom delay={index * 100}>
                  <ZCard
                    title="Test"
                    description="790 Đường Láng, Đống Đa, Hà Nội"
                    image="/images/image1.jpg"
                    price={100}
                  />
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Zoom delay={8 * 100}>
            <Button variant="outlined">+ Load more...</Button>
          </Zoom>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Explore;

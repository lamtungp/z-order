import {
  Box,
  Button,
  Container,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade, Slide } from 'react-awesome-reveal';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    padding: theme.spacing(1, 0),
    paddingTop: 71,
    position: 'relative',
    backgroundImage: 'url(/images/banner-bg.svg)',
  },

  CircleImage: {
    position: 'absolute',
    left: 44,
    bottom: 60,
    objectFit: 'contain',
    overflow: 'hidden',
  },

  EatingImage: {},
}));

const Banner = () => {
  const classes = useStyles();
  const menuElement = document.getElementById('menu');
  const aboutElement = document.getElementById('about');

  // const orderNow = () => {
  //   window.scrollTo({
  //     top: (menuElement && menuElement.offsetTop - 90) || 0,
  //     behavior: 'smooth',
  //   });
  //   //window.location.href='#products-feed'
  // };

  // const viewMore = () => {
  //   window.scrollTo({
  //     top: (aboutElement && aboutElement.offsetTop - 90) || 0,
  //     behavior: 'smooth',
  //   });
  //   //window.location.href='#products-feed'
  // };

  return (
    <Box className={classes.Root}>
      <Container maxWidth="md">
        <Box className={classes.CircleImage}>
          <Fade direction="left"></Fade>
        </Box>

        <Box className="absolute top-16 lg:left-72 left-60 lg:w-auto sm:w-10 w-8 object-contain overflow-hidden">
          <Fade direction="up"></Fade>
        </Box>
        <Box className="max-w-screen-xl mx-auto lg:py-10  sm:pt-32 pt-20">
          <Box className="flex lg:justify-between lg:items-center overflow-hidden p-0.5 lg:flex-row flex-col lg:gap-4 gap-8">
            <Grid container>
              <Grid item xs={5}>
                <Fade direction="left">
                  <Box className="main_heading">
                    <Typography variant="h5" fontWeight="bold">
                      Z-Order giúp bạn tiết kiệm thời gian và đặt đồ nhanh chóng
                    </Typography>
                    <Typography variant="subtitle1">
                      Đặt đồ ngay bây giờ!
                    </Typography>
                    <Box className="flex items-center xl:mt-12 lg:mt-10  sm:mt-8 mt-6 gap-4 flex-wrap">
                      <Button>Order Now</Button>
                      <Button>View More</Button>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            </Grid>

            {/* <Fade direction="right">
            <Box className="lg:w-1/2 lg:m-0 lg:max-w-none sm:max-w-lg  max-w-xs  mx-auto">
              <img
                src="/images/eating_together.svg"
                alt=""
                width={600}
                height={600}
              />
            </Box>
          </Fade> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

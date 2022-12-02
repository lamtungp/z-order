import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputBase,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router';
import useResponsive from 'src/hooks/useResponsive';

import Tag from '../Tag';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    position: 'absolute',
    top: 0,
    width: '100%',
    color: '#FFFFFF',
    paddingTop: '13.5%',

    [theme.breakpoints.down('md')]: {
      position: 'relative',
      padding: '20px 0 60px',
      color: '#132150',
    },
  },

  BannerTextBox: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 20px',

    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
      justifyContent: 'center',
    },
  },

  BannerTextTitle: {
    lineHeight: 1.6,

    [theme.breakpoints.down('lg')]: {
      fontSize: 26,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },

  ButtonSearch: {
    background: '#F3BA00',
    padding: '15px 18px',
    borderRadius: '0 8px 8px 0',
    color: '#FFFFFF',

    '&:hover': {
      background: '#F3BA29',
    },
  },
}));

const labelTags = ['All', 'Đồ ăn', 'Đồ uống', 'Đồ chay'];

const Banner = () => {
  const classes = useStyles();
  const matchDownMd = useResponsive({ query: 'down', key: 'md' });
  const menuElement = document.getElementById('menu');
  const aboutElement = document.getElementById('about');
  const navigator = useNavigate();

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
    <Box>
      <img src="/images/banner-bg.svg" alt="banner" width={'100%'} />

      <Box className="">
        <Fade direction="up"></Fade>
      </Box>
      <Box className={classes.Root}>
        <Grid container className={classes.BannerTextBox}>
          <Grid item xs={10} md={6}>
            <Fade direction={matchDownMd ? 'up' : 'left'}>
              <Box
                className="main_heading"
                sx={{ textAlign: matchDownMd ? 'center' : 'inherit' }}
              >
                <Typography
                  className={classes.BannerTextTitle}
                  variant="h4"
                  fontWeight="bold"
                >
                  Z-Order
                </Typography>
                <Typography
                  sx={{ margin: matchDownMd ? '8px 0' : '18px 0' }}
                  variant="body1"
                >
                  Ứng dụng giúp bạn tiết kiệm thời gian và đặt đồ nhanh chóng
                  <br />
                  Hãy bắt đầu trải nghiệm ngay bây giờ nào!
                </Typography>
                <Box sx={{ paddingRight: matchDownMd ? 0 : '30%' }}>
                  <FormControl
                    sx={{
                      background: matchDownMd ? 'inherit' : '#FFFFFF',
                      borderRadius: '8px',
                      height: matchDownMd ? '34px' : 'inherit',
                    }}
                    variant="outlined"
                    fullWidth
                  >
                    <InputBase
                      sx={{
                        padding: '11.25px 15px',
                        borderRadius: '8px',
                        paddingRight: 0,
                        border: '1px solid rgba(0, 0, 0, 0.23)',
                      }}
                      placeholder="Search restaurant or food..."
                      endAdornment={
                        <InputAdornment position="end">
                          <Button className={classes.ButtonSearch}>
                            Search
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
                <Box sx={{ marginTop: matchDownMd ? '40px' : '24px' }}>
                  {labelTags.map((label, index) => (
                    <Tag
                      sx={{
                        borderColor: '#F3BA00',
                        color: matchDownMd ? '#132150' : '#FFFFFF',
                        marginRight: '6px',
                      }}
                      variant="outlined"
                      label={label}
                      key={index}
                      onClick={() => {}}
                    />
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;

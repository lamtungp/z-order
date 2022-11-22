import { Box, Container, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MediaCard from 'src/components/MediaCard';
import Tag from 'src/components/Tag';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    padding: theme.spacing(2, 1),
  },

  TextTitle: {
    fontWeight: 'bold !important',
    marginBottom: `${theme.spacing(2)} !important`,
  },

  BoxContainer: {
    marginTop: theme.spacing(1),
  },

  BoxContent: {
    padding: theme.spacing(2, 2, 4),
    background: '#fff',
    borderRadius: '6px',
  },

  TagRecommend: {
    marginBottom: theme.spacing(2),
  },
}));

const Explore = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.Root}>
      <Box className={classes.BoxContainer}>
        <Typography className={classes.TextTitle} variant="body1">
          Đề xuất
        </Typography>
        <Box className={classes.TagRecommend}>
          <Tag variant="outlined" label="All" onClick={() => {}} />
        </Box>
      </Box>

      <Box className={classes.BoxContainer} sx={{ marginTop: '20px' }}>
        <Typography className={classes.TextTitle} variant="body1">
          Quán yêu thích
        </Typography>
        <Box className={classes.BoxContent}>
          <Box className={classes.TagRecommend}>
            <Tag variant="outlined" label="All" onClick={() => {}} />
          </Box>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Grid item xs={2} key={index}>
                <MediaCard
                  image="/images/image1.jpg"
                  title="Title"
                  description="description"
                  slug="nem-nuong"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box className={classes.BoxContainer} sx={{ marginTop: '20px' }}>
        <Typography className={classes.TextTitle} variant="body1">
          Tìm kiếm gần đây
        </Typography>
        <Box className={classes.BoxContent}>
          <Box className={classes.TagRecommend}>
            <Tag variant="outlined" label="All" onClick={() => {}} />
          </Box>
          <Grid container spacing={2}>
            {[1, 2].map((item, index) => (
              <Grid item xs={2} key={index}>
                <MediaCard
                  image="/images/image1.jpg"
                  title="Title"
                  description="description"
                  slug="nem-nuong"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Explore;

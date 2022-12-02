import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Theme,
  Box,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AddBox, LocationOn, Star } from '@mui/icons-material';

import Tag from '../Tag';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    borderRadius: 10,
    boxShadow: '0px 0px 1px rgba(187, 187, 187, 0.25)',

    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },

    '& .MuiCardContent-root': {
      padding: 12,
    },
  },

  CardTitle: {
    color: '#132150',
    fontWeight: 600,
    fontSize: 20,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },

  CardDescription: {
    fontWeight: 400,
    fontSize: 16,
    color: '#5C5B5B',
    lineHeight: 1.8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },

  RoomAvailable: {
    fontSize: 14,
    color: '#5C5B5B',
    marginTop: 10,
  },
}));

type ZCardProps = {
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: number;
};

const ZCard = ({ title, description, image, rating, price }: ZCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root}>
      {image && (
        <CardMedia component="img" width={384} image={image} alt={title} />
      )}

      <CardContent>
        {title && (
          <Typography
            className={classes.CardTitle}
            gutterBottom
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
        )}
        <Box sx={{ marginBottom: '7px', display: 'flex' }}>
          <LocationOn sx={{ width: '20px', color: '#F3BA00' }} />
          <Typography
            className={classes.CardDescription}
            variant="body2"
            color="text.secondary"
            component={'span'}
          >
            {description}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tag
            sx={{ background: '#F7F8FA', height: 'inherit' }}
            icon={
              <Star
                sx={{
                  width: '12px',
                  color: '#F3BA00 !important',
                }}
              />
            }
            label={rating || 0}
          />
          <Button sx={{ minWidth: 'inherit', padding: 0 }}>
            <AddBox />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ZCard;

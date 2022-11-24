import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  SxProps,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router';

type MediaCardProps = {
  slug: string;
  image?: string;
  title?: string;
  description?: string;
};

const MediaCardStyle: SxProps = {
  cursor: 'pointer',
  display: 'flex',
  '&:hover': {
    boxShadow:
      '0px 2px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%)',
  },
};

const MediaCardTitleStyle: SxProps = {
  fontWeight: 'bold',
};

const MediaCardActionStyle: SxProps = {
  fontWeight: 'bold',
  textTransform: 'inherit',
};

const MediaCard = ({ image, title, description, slug }: MediaCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={MediaCardStyle} onClick={() => navigate(`/restaurant/${slug}`)}>
      <CardMedia
        component="img"
        sx={{ width: 170 }}
        image={image}
        alt={image}
      />
      <CardContent sx={{ padding: '8px 16px', width: '100' }}>
        <Typography
          gutterBottom
          variant="body1"
          sx={MediaCardTitleStyle}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <CardActions sx={{ padding: 0 }}>
          <Button
            sx={MediaCardActionStyle}
            size="small"
            onClick={() => navigate(`/restaurant/${slug}`)}
          >
            Đặt ngay
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default MediaCard;

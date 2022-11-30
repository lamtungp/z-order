import {
  alpha,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
  Theme,
  Tooltip,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { NotificationsSharp } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  NotificationsBadge: {
    '& .MuiBadge-badge': {
      backgroundColor: alpha(theme.palette.error.main, 0.1),
      color: '#ffffff',
      minWidth: 16,
      height: 16,
      padding: 0,

      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        boxShadow: `0 0 0 1px ${alpha(theme.palette.error.main, 0.3)}`,
        content: '',
      },
    },
  },
}));

function HeaderNotifications() {
  const classes = useStyles();
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title="Thông báo">
        <IconButton disableTouchRipple ref={ref} onClick={handleOpen}>
          <Badge
            className={classes.NotificationsBadge}
            badgeContent={1}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <NotificationsSharp />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{ p: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Thông báo
          </Typography>
        </Box>
        <Divider />
        <List sx={{ p: 0 }}>
          <ListItem
            sx={{ p: 2, minWidth: 280, display: { xs: 'block', sm: 'flex' } }}
          >
            <Box flex="1">
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                new messages in your inbox
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}

export default HeaderNotifications;

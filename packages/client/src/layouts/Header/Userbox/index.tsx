import React from 'react';
import {
  Avatar,
  ListItemIcon,
  ListItemText,
  Menu,
  Theme,
  MenuItem,
  Divider,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  AccountBoxOutlined,
  ListAltOutlined,
  LogoutOutlined,
  ManageAccountsOutlined,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

const useStyles = makeStyles((theme: Theme) => ({
  AvatarDropdown: {
    marginTop: theme.spacing(1),
    '& .MuiPaper-root': {
      borderRadius: 10,
      minWidth: 180,
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: 0,
      },
      '& .MuiMenuItem-root': {
        padding: 10,
        '& .MuiListItemText-root': {
          marginLeft: 8,
          '& .MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
  },

  Button: {
    '&:hover': {
      background: 'transparent',
      '& .MuiAvatar-root': {
        background: '#eae6eb',
      },
    },
  },

  Divider: {
    margin: '0 !important',
  },
}));

const HeaderDropdown = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        disableRipple
        className={classes.Button}
        onClick={handleClick}
      >
        <Avatar
          sx={{ width: '36px', height: '36px' }}
          alt="Remy Sharp"
          src={''}
        />
        <Typography
          variant="subtitle2"
          color="black"
          textTransform={'none'}
        ></Typography>
      </IconButton>

      <Menu
        className={classes.AvatarDropdown}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountBoxOutlined />
          </ListItemIcon>
          <ListItemText>Thông tin cá nhân</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ListAltOutlined />
          </ListItemIcon>
          <ListItemText>Danh sách đặt của tôi</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ManageAccountsOutlined />
          </ListItemIcon>
          <ListItemText>Cài đặt</ListItemText>
        </MenuItem>
        <Divider className={classes.Divider} />
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText>Đăng xuất</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderDropdown;

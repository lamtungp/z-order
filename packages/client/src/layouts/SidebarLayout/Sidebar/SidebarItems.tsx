import {
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  ListItem,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router';

import { MenuItem, MenuItems } from './items';

const useStyles = makeStyles((theme: Theme) => ({
  MenuList: {
    '& .MuiTypography-root': {
      fontSize: 14,
    },
  },

  Button: {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 14,
    borderRadius: '4px !important',
    paddingLeft: `${theme.spacing(1.5)} !important`,
    paddingRight: `${theme.spacing(1.5)} !important`,
    minHeight: 48,

    '&.active': {
      background: 'rgb(238, 238, 238)',
    },

    '&:focus': {
      background: 'rgb(238, 238, 238)',
      '&:hover': {
        background: 'rgb(238, 238, 238)',
      },
    },

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  Divider: {
    borderColor: 'rgb(238, 238, 238) !important',
    margin: theme.spacing(1, 0),
  },

  ItemHeading: {
    margin: `${theme.spacing(1, 0)} !important`,
    paddingLeft: theme.spacing(1),
    fontWeight: 500,
    color: 'black',
  },
}));

type SidebarItemsProps = {
  menuItem: MenuItems;
  drawerOpen: boolean;
};

const SidebarItems = ({ menuItem, drawerOpen }: SidebarItemsProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <List
      className={classes.MenuList}
      disablePadding
      sx={{ p: 1, paddingBottom: 0 }}
    >
      <Divider className={classes.Divider} />

      {menuItem.items.map((element: MenuItem, index: number) => (
        <ListItem
          key={index}
          disablePadding
          sx={{
            display: 'block',
            marginTop: index === 0 ? 1 : 0,
          }}
        >
          <ListItemButton
            sx={{ justifyContent: drawerOpen ? 'initial' : 'center' }}
            className={`${classes.Button} ${
              location.pathname === element.link && 'active'
            }`}
            key={index}
            onClick={() => {
              navigate(element.link || '', { replace: true });
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: drawerOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {element.icon}
            </ListItemIcon>
            <ListItemText
              primary={element.name}
              sx={{ opacity: drawerOpen ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarItems;

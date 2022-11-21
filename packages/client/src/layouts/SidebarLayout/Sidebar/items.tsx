import {
  AddShoppingCart,
  ChatBubbleOutlineOutlined,
  EventNote,
  Explore,
  FmdGoodOutlined,
  GridViewOutlined,
  HotelOutlined,
  ListAltOutlined,
  LogoutOutlined,
  ManageAccountsOutlined,
  PeopleAltOutlined,
  PermContactCalendarOutlined,
  PermIdentityOutlined,
  Schedule,
  SupportAgentOutlined,
} from '@mui/icons-material';

export type MenuItem = {
  link?: string;
  icon?: React.ReactNode;
  badge?: string;
  name?: string;
};

export interface MenuItems {
  items: MenuItem[];
  heading?: string;
}

export const items: MenuItems[] = [
  {
    items: [
      {
        name: 'Explore',
        icon: <Explore />,
        link: '/explore',
      },
      {
        name: 'Add Order',
        icon: <AddShoppingCart />,
        link: '#',
      },
    ],
  },
  {
    items: [
      {
        name: 'My Orders',
        icon: <ListAltOutlined />,
        link: '#',
      },
      {
        name: 'My Schedules',
        icon: <EventNote />,
        link: '#',
      },
      {
        name: 'Recently Orders',
        icon: <Schedule />,
        link: '#',
      },
    ],
  },
  {
    items: [
      {
        name: 'Contact',
        icon: <SupportAgentOutlined />,
        link: '#',
      },
      {
        name: 'Feedback',
        icon: <ChatBubbleOutlineOutlined />,
        link: '#',
      },
    ],
  },
];

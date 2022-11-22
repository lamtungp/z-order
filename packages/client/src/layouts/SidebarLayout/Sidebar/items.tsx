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
        name: 'Khám phá',
        icon: <Explore />,
        link: '/explore',
      },
      {
        name: 'Thêm danh sách mua',
        icon: <AddShoppingCart />,
        link: '/add-order',
      },
    ],
  },
  {
    items: [
      {
        name: 'Danh sách đặt của tôi',
        icon: <ListAltOutlined />,
        link: '/my-orders',
      },
      {
        name: 'Lịch đặt của tôi',
        icon: <EventNote />,
        link: '/my-schedules',
      },
      {
        name: 'Đơn đặt gần đây',
        icon: <Schedule />,
        link: '/recently-orders',
      },
    ],
  },
  {
    items: [
      {
        name: 'Liên hệ Admin',
        icon: <SupportAgentOutlined />,
        link: '/contact',
      },
      {
        name: 'Phản hồi về ứng dụng',
        icon: <ChatBubbleOutlineOutlined />,
        link: '/feedback-app',
      },
    ],
  },
];

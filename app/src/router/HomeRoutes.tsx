import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

interface homeRoutesInterface {
  path: string;
  children: React.ReactNode;
}

export const homeRoutes: homeRoutesInterface[] = [
  {
    path: "/home/user_management",
    children: <UserManagement />,
  },
  {
    path: "/home/setting",
    children: <Setting />,
  },
  {
    path: "/home/",
    children: <Home />,
  },
  {
    path: "/home/*",
    children: <Page404 />,
  },
];

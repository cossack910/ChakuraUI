import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

interface homeRoutesInterface {
  path: string;
  children: React.ReactNode;
}

export const homeRoutes: homeRoutesInterface[] = [
  {
    path: "/user_management",
    children: <UserManagement />,
  },
  {
    path: "/setting",
    children: <Setting />,
  },
  {
    path: "Login",
    children: <Login />,
  },
];

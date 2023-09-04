import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { LoginUserProvider } from "../providers/LoginUserProvider";

import { HeaderLayout } from "../components/template/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))}
      </Routes>
    </LoginUserProvider>
  );
});

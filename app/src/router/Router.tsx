import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {homeRoutes.map((route) => (
        <Route path={route.path} element={route.children} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});

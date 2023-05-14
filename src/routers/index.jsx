// https://blog.microcms.io/react-best-practices-part3/

import React from "react";
import { Routes, Route } from "react-router-dom";

const index = () => {
  const routes = [
    {
      path: "/",
      element: React.lazy(() => import("../pages/Home")),
    },
    {
      path: "/verification",
      element: React.lazy(() => import("../pages/Verification")),
    },
    {
      path: "/setting",
      element: React.lazy(() => import("../pages/Setting")),
    },
  ];

  const createRoute = ({ element, children, role, ...route }) => {
    const Component = element;
    return (
      <Route key={route.path} {...route} element={<Component />}>
        {children && children.map(createRoute)}
      </Route>
    );
  };

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>{routes.map(createRoute)}</Routes>
      </React.Suspense>
    </>
  );
};

export default index;

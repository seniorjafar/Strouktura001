import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout";
import { routes } from "./Routes/routes"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map(({ component: Element, path }, index) => (
          <Route
            key={index}
            path={path}
            element={<Element />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

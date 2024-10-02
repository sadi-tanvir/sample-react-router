import * as React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const User = React.lazy(() => import("./components/User"));
import Layout from "./Layout";
import Loader from "./components/Loader";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} path="/">
        <Route path="" element={
          <React.Suspense fallback={<Loader message="Home Component is Loading" />}>
            <Home />
          </React.Suspense>}
        />
        <Route path="/about" element={
          <React.Suspense fallback={<Loader message="About Component is Loading" />}>
            <About />
          </React.Suspense>}
        />
        <Route path="/user" element={
          <React.Suspense fallback={<Loader message="User Component is Loading" />}>
            <User />
          </React.Suspense>}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
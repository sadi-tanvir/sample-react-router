import * as React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const User = React.lazy(() => import("./components/User"));
import Layout from "./Layout";
import Loader from "./components/Loader";
import Login from "./components/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";

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

        {/* user route with protected route */}
        <Route loader={() => false} element={<ProtectedRoutes />}>
          <Route loader={async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            return data.json();
          }} path="/user" element={
            <React.Suspense fallback={<Loader message="User Component is Loading" />}>
              <User />
            </React.Suspense>}
          />
        </Route>

        <Route path="/login" element={<Login />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App';

import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Home from './components/Home/Home';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostBody from './components/PostBody/PostBody';
import Albums from './components/Albums/Albums';
import AlbumDetail from './components/Album/AlbumDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostBody></PostBody>,
      },
      {
        path: "/albums",
        loader: () => fetch("https://jsonplaceholder.typicode.com/albums"),
        element: <Albums></Albums>,
      },
      {
        path: "/album/:albumId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`),
        element: <AlbumDetail></AlbumDetail>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

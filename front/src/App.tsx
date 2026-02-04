import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

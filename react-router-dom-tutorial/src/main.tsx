import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./routes/Home.tsx";
import { Contact } from "./routes/Contact.tsx";
import { ErrorPage } from "./routes/ErrorPage.tsx";
import { ContactDetails } from "./routes/ContactDetails.tsx";

//1 - Configurando router

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //3 - pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      //5 - nested routes - identificador único (dynamic routes)
      {
        path: '/contact/:nomeDaVariavel',
        element: <ContactDetails />
      },
      //7 - navegar para paginas que não existem
      {
        path: '/oldPage',
        element: <Navigate to="/contact" />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

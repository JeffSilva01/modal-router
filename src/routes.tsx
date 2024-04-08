import { createBrowserRouter } from "react-router-dom"
import { Modal } from "./modal"
import { Page } from "./page"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "/page",
    element: <Page />,
    children: [{ path: "modal/:id", element: <Modal /> }]
  }
])

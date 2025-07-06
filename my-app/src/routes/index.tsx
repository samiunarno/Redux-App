import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import User from "@/pages/User";
import Tasks from "@/pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
      {
        path: "user",
        Component: User,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
    ],
  },
]);

export default router;

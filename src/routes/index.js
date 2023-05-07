import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import TodoList from "../pages/TodoList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/todo-list",
    element: <TodoList />,
  },
]);

export default routes;

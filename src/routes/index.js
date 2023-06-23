import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import TodoList from "../pages/TodoList";
import NumberGame from "../pages/NumberGame";

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
  {
    path: "/number-arrage",
    element: <NumberGame />,
  },
]);

export default routes;

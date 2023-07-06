import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import TodoList from "../pages/TodoList";
import NumberGame from "../pages/NumberGame";
import History from '../pages/NumberGame/History';
import {URL} from '../helpers/constants';
const {
  NUMBER_HISTORY,
  NUMBER_DASHBOARD
} = URL;

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
    path: NUMBER_DASHBOARD,
    element: <NumberGame />,
  },
  {
    path: NUMBER_HISTORY,
    element: <History />,
  },
]);

export default routes;

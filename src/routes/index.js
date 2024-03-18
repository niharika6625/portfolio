import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import WeatherDetails from "../pages/Weather/Details";
import NumberGame from "../pages/NumberGame";
import History from '../pages/NumberGame/History';
import { URL } from '../helpers/constants';
import PublicLayout from '../layouts/PublicLayout';
import TodoList from "../pages/TodoList";
import Calculator from "../pages/Calculator";
const {
  HOME,
  NUMBER_HISTORY,
  NUMBER_DASHBOARD,
  WEATHER,
  WEATHER_DETAILS,
  TODO_LIST,
  CALCULATOR
} = URL;

const routes = createBrowserRouter([
  {
    path: HOME,
    element: <PublicLayout><Home /></PublicLayout>,
  },
  {
    path: WEATHER,
    element: <PublicLayout><Weather /></PublicLayout>,
  },
  {
    path: WEATHER_DETAILS,
    element: <PublicLayout><WeatherDetails /></PublicLayout>,
  },
  {
    path: NUMBER_DASHBOARD,
    element: <PublicLayout><NumberGame /></PublicLayout>,
  },
  {
    path: NUMBER_HISTORY,
    element: <PublicLayout><History /></PublicLayout>,
  },
  {
    path: TODO_LIST,
    element: <PublicLayout><TodoList /></PublicLayout>,
  },
  {
    path: CALCULATOR,
    element: <PublicLayout><Calculator /></PublicLayout>,
  },
], { basename: '/portfolio' });

export default routes;

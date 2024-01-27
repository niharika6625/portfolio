import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";
import WeatherDetails from "../pages/Weather/Details";
import NumberGame from "../pages/NumberGame";
import History from '../pages/NumberGame/History';
import Login from '../pages/Login';
import Signup from "../pages/Signup";
import TodoList from "../pages/TodoList"
import {URL} from '../helpers/constants';
import PublicLayout from '../layouts/PublicLayout'
const {
  HOME,
  NUMBER_HISTORY,
  NUMBER_DASHBOARD,
  WEATHER,
  WEATHER_DETAILS,
  LOGIN,
  SIGNUP,
  TODOLIST
} = URL;

const routes = createBrowserRouter([
  {
    path: HOME,
    element: <PublicLayout><Home /></PublicLayout> ,
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
    path: LOGIN,
    element: <PublicLayout><Login /></PublicLayout>,
  },
  {
    path: SIGNUP,
    element: <PublicLayout><Signup /></PublicLayout>,
  },
  {
    path: TODOLIST,
    element: <PublicLayout><TodoList /></PublicLayout>,
  },
], {basename: '/portfolio'});

export default routes;

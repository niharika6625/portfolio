//TODO remove this file if not in use

import { createBrowserRouter } from 'react-router-dom';
import { URL } from '../helpers/constants';
import PublicLayout from '../layouts/PublicLayout';
import Calculator from '../pages/Calculator';
import Ecommerce from '../pages/Ecommerce';
import Home from '../pages/Home';
import NumberGame from '../pages/NumberGame';
import History from '../pages/NumberGame/History';
import TodoList from '../pages/TodoList';
import Weather from '../pages/Weather';
import WeatherDetails from '../pages/Weather/Details';
const {
  HOME,
  NUMBER_HISTORY,
  NUMBER_DASHBOARD,
  WEATHER,
  WEATHER_DETAILS,
  TODO_LIST,
  CALCULATOR,
  ECOMMERCE,
} = URL;

const routes = createBrowserRouter(
  [
    {
      path: HOME,
      element: (
        <PublicLayout>
          <Home />
        </PublicLayout>
      ),
    },
    {
      path: WEATHER,
      element: (
        <PublicLayout>
          <Weather />
        </PublicLayout>
      ),
    },
    {
      path: WEATHER_DETAILS,
      element: (
        <PublicLayout>
          <WeatherDetails />
        </PublicLayout>
      ),
    },
    {
      path: NUMBER_DASHBOARD,
      element: (
        <PublicLayout>
          <NumberGame />
        </PublicLayout>
      ),
    },
    {
      path: NUMBER_HISTORY,
      element: (
        <PublicLayout>
          <History />
        </PublicLayout>
      ),
    },
    {
      path: TODO_LIST,
      element: (
        <PublicLayout>
          <TodoList />
        </PublicLayout>
      ),
    },
    {
      path: CALCULATOR,
      element: (
        <PublicLayout>
          <Calculator />
        </PublicLayout>
      ),
    },
    {
      path: ECOMMERCE,
      element: (
        <PublicLayout>
          <Ecommerce />
        </PublicLayout>
      ),
    },
  ],
  {
    basename: '/portfolio',
  },
);

export default routes;

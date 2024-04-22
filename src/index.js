import React, { useEffect } from 'react';
import './index.css';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { URL } from './helpers/constants/constants.js';
import Layout from './layouts/Layout.jsx';
import ComponentDesign from './pages/ComponentDesign/index.jsx';
import CssPractice from './pages/CssPractice/index.jsx';
// import JsPractice from './pages/JsPractice/index.jsx';
import FetchData from './pages/FetchData/index.jsx';
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/index.jsx';
import History from './pages/NumberGame/History.jsx';
import NumberGame from './pages/NumberGame/index.jsx';
import { PrivateRoute } from './pages/PrivateRoute.jsx';
import ProductsCart from './pages/ProductCart/index.jsx';
import QuizHome from './pages/QuizApp/index.jsx';
import QuizCategory from './pages/QuizApp/quiz/QuizCategory/index.jsx';
import QuizDashboard from './pages/QuizApp/quiz/QuizDashboard/index.jsx';
import QuizLevel from './pages/QuizApp/quiz/QuizLevel/index.jsx';
import Register from './pages/Register/index.jsx';
import TodoList from './pages/TodoList/index.jsx';
import UsersDashboard from './pages/User/index.jsx';
import InfoUpdate from './pages/User/Update/index.jsx';
import Weather from './pages/Weather/index.jsx';
import reportWebVitals from './reportWebVitals';
import store from './store/store.js';
import { theme } from './theme.js';

const {
  HOME,
  WEATHER_APP,
  TODO_LIST,
  LOGIN,
  REGISTER,
  USER_DASHBOARD,
  INFO_UPDATE,
  QUIZ_DASHBOARD,
  QUIZ_CATEGORY,
  QUIZ_LEVEL,
  QUIZ_HOME,
  COMPONENT_DESIGN,
  FETCH_DATA,
  NUMBER_GAME,
  NUMBER_GAME_HISTORY,
  CSS_PRACTICE,
  PRODUCTS_CART,
} = URL;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="portfolio">
          <ScrollToTop />
          <Routes>
            <Route
              path={HOME}
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path={WEATHER_APP}
              element={
                <Layout>
                  <Weather />
                </Layout>
              }
            />
            <Route
              path={TODO_LIST}
              element={
                <Layout>
                  <PrivateRoute>
                    <TodoList />
                  </PrivateRoute>
                </Layout>
              }
            />
            <Route
              //path="/login/:page?"
              path={`${LOGIN}/:page?`}
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              //path="/register/:page?"
              path={`${REGISTER}/:page?`}
              element={
                <Layout>
                  <Register />
                </Layout>
              }
            />
            <Route
              path={USER_DASHBOARD}
              element={
                <Layout>
                  <PrivateRoute>
                    <UsersDashboard />
                  </PrivateRoute>
                </Layout>
              }
            />
            <Route
              //path="/infoUpdate/:id?"
              path={`${INFO_UPDATE}/:id?`}
              element={
                <Layout>
                  <PrivateRoute>
                    <InfoUpdate />
                  </PrivateRoute>
                </Layout>
              }
            />
            <Route
              path={QUIZ_DASHBOARD}
              element={
                <Layout>
                  <PrivateRoute>
                    <QuizDashboard />
                  </PrivateRoute>
                </Layout>
              }
            />
            <Route
              path={QUIZ_CATEGORY}
              element={
                <Layout>
                  <PrivateRoute>
                    <QuizCategory />
                  </PrivateRoute>
                </Layout>
              }
            />
            <Route
              //path="/quizlevel/:id?"
              path={`${QUIZ_LEVEL}/:id?`}
              element={
                <Layout>
                  <PrivateRoute>
                    <QuizLevel />
                  </PrivateRoute>
                </Layout>
              }
            />
            <Route
              //path="/quizHome/:catId?/:levelId?"
              path={`${QUIZ_HOME}/:catId?/:levelId?`}
              element={
                <Layout>
                  <PrivateRoute>
                    <QuizHome />
                  </PrivateRoute>
                </Layout>
              }
            />
            <Route
              path={COMPONENT_DESIGN}
              element={
                <Layout>
                  <ComponentDesign />
                </Layout>
              }
            />
            <Route
              path={FETCH_DATA}
              element={
                <Layout>
                  <FetchData />
                </Layout>
              }
            />
            <Route
              path={NUMBER_GAME}
              element={
                <Layout>
                  <NumberGame />
                </Layout>
              }
            />
            <Route
              path={NUMBER_GAME_HISTORY}
              element={
                <Layout>
                  <History />
                </Layout>
              }
            />
            <Route
              path={CSS_PRACTICE}
              element={
                <Layout>
                  <CssPractice />
                </Layout>
              }
            />
            {/* <Route
          path="/js-practice"
          element={
            <Layout>
              <JsPractice />
            </Layout>
          }
        /> */}
            <Route
              path={PRODUCTS_CART}
              element={
                <Layout>
                  <ProductsCart />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
      ,
    </ThemeProvider>
  </StyledEngineProvider>,

  // </React.StrictMode>,
);

reportWebVitals();

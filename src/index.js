import React, { useEffect } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import QuizCategory from './components/quiz/QuizCategory.jsx';
import QuizDashboard from './components/quiz/QuizDashboard.jsx';
import QuizLevel from './components/quiz/QuizLevel.jsx';
import ComponentDesign from './pages/ComponentDesign/index.jsx';
import CssPractice from './pages/CssPractice/index.jsx';
// import JsPractice from './pages/JsPractice/index.jsx';
import FetchData from './pages/FetchData/index.jsx';
import InfoUpdate from './pages/InfoUpdate.jsx';
import Layout from './pages/Layout.jsx';
import Login from './pages/Login.jsx';
import History from './pages/NumberGame/History.jsx';
import NumberGame from './pages/NumberGame/index.jsx';
import { PrivateRoute } from './pages/PrivateRoute.jsx';
import ProductsCart from './pages/ProductCart/index.jsx';
import QuizHome from './pages/QuizHome.jsx';
import Register from './pages/Register.jsx';
import TodoLists from './pages/TodoLists.jsx';
import UsersDashboard from './pages/UsersDashboard.jsx';
import WeatherApp from './pages/WeatherApp.jsx';
import reportWebVitals from './reportWebVitals';
import store from './store/store.js';

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
  <Provider store={store}>
    <BrowserRouter basename="portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/weatherApp"
          element={
            <Layout>
              <WeatherApp />
            </Layout>
          }
        />
        <Route
          path="/todolists"
          element={
            <Layout>
              <PrivateRoute>
                <TodoLists />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/login/:page?"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register/:page?"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <PrivateRoute>
                <UsersDashboard />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/infoUpdate/:id?"
          element={
            <Layout>
              <PrivateRoute>
                <InfoUpdate />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/quizDashboard"
          element={
            <Layout>
              <PrivateRoute>
                <QuizDashboard />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/quizCategory"
          element={
            <Layout>
              <PrivateRoute>
                <QuizCategory />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/quizlevel/:id?"
          element={
            <Layout>
              <PrivateRoute>
                <QuizLevel />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/quizHome/:catId?/:levelId?"
          element={
            <Layout>
              <PrivateRoute>
                <QuizHome />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path="/component-design"
          element={
            <Layout>
              <ComponentDesign />
            </Layout>
          }
        />
        <Route
          path="/fetch-data"
          element={
            <Layout>
              <FetchData />
            </Layout>
          }
        />
        <Route
          path="/number-game"
          element={
            <Layout>
              <NumberGame />
            </Layout>
          }
        />
        <Route
          path="/number-arrange-history"
          element={
            <Layout>
              <History />
            </Layout>
          }
        />
        <Route
          path="/css-practice"
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
          path="/productsCart"
          element={
            <Layout>
              <ProductsCart />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>,

  // </React.StrictMode>,
);

reportWebVitals();

import { RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
//import Home from "./pages/Home";
// import Weather from "./pages/Weather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={routes} />
      <Footer />
      {/* <Header />
      <Weather />
      <Footer />
      </RouterProvider> */}
    </div>
  );
}

export default App;

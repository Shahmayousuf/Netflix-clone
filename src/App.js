import { originals, action, comedy, horror } from "./urls";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path='/register'element={<Register/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='homepage'element={<HomePage/>}></Route>
        

        
        
        </Route>
      </Routes>
      </BrowserRouter>
       {/* <LandingPage /> */}
      {/* <Login />
      <Register />

      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />   */}
    </div>
  );
}

export default App;

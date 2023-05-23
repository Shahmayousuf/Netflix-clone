import { originals, action, comedy, horror } from "./urls";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Login />
      <Register />

      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall /> 
    </div>
  );
}

export default App;

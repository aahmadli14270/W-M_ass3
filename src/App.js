import "./App.css";
import MoviesList from "./MoviesList/MoviesList";
import Home from "./Home/Home";
import InfoPage from "./InfoPage/InfoPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

const test = 0;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Movies" element={<MoviesList />} />
          <Route path="/InfoPage" element={<InfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

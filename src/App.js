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

function InfoPage(props) {
  return (
    <div>
      <MainContent items={props.sid}></MainContent>
    </div>
  );
}

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

//   return (
//     <Router>
//       <div className="App">
//         <Header></Header>

//         <Link to="/InfoPage">
//           <p>{data[0].Series_Title}</p>
//         </Link>

//         {/* <MainContent items={data[0]}></MainContent>
//       <p>{data[0].ID}</p>
//       <p>{data[0].Series_Title}</p> */}

//         <Routes>
//           <Route
//             path="/InfoPage"
//             element={<InfoPage sid={data[0]}></InfoPage>}
//           ></Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;

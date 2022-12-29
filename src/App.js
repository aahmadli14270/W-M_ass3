import "./App.css";
import Header from "./Header-folder/Header";
import MainContent from "./Main-content/MainContent";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function InfoPage(props) {
  return (
    <div>
      <MainContent items={props.sid}></MainContent>
    </div>
  );
}


function App() {
  const [data, setData] = useState("0");

  // let data = 0;
  useEffect(() => {
    fetch("http://localhost:3500/items")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        // console.log("DATA IS:", data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header></Header>

        <Link to="/InfoPage">
          <p>{data[0].Series_Title}</p>
        </Link>

        {/* <MainContent items={data[0]}></MainContent>
      <p>{data[0].ID}</p>
      <p>{data[0].Series_Title}</p> */}

        <Routes>
          <Route
            path="/InfoPage"
            element={<InfoPage sid={data[0]}></InfoPage>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

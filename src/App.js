import "./App.css";
import Header from "./Header-folder/Header";
import MainContent from "./Main-content/MainContent";

function App() {
  fetch("http://localhost:3500/items")
    .then((res) => res.json())
    .then((result) => console.log(result));

  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
    </div>
  );
}

export default App;

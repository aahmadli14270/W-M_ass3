import { Link } from "react-router-dom";

function InfoPage(props) {
  return (
    <div>
      <p>INFO PAGEE</p>
    </div>
  );
}

export default InfoPage;

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

// function InfoPage(props) {
//   return (
//     <div>
//       <MainContent items={props.sid}></MainContent>
//     </div>
//   );
// }

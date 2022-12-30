import { Link } from "react-router-dom";
import MainContent from "./Main-content/MainContent";
import { useLocation } from "react-router-dom";

function InfoPage(props) {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);

  return (
    <div>
      <p>INFO PAGEE</p>
      <MainContent items={propsData}></MainContent>
    </div>
  );
}

export default InfoPage;

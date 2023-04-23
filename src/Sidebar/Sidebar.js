import History from "./History/History";
import Options from "./Options";

function Sidebar(props) {
  return (
    <Options>
      <History historyData={props.historyData}/>
    </Options>
  );
}

export default Sidebar;

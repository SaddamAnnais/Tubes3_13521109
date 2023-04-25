import HistoryEntry from "./HistoryEntry";
import Scrollbar from "../../CustomComponents/Scrollbar";


function History(props) {
  return (
    <Scrollbar>
      {props.historyData &&
        props.historyData.map((value) => <HistoryEntry text={value.name} key={value.id} id={value.id} />)}
    </Scrollbar>
  );
}

export default History;

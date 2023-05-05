import HistoryEntry from "./HistoryEntry";
import Scrollbar from "../../CustomComponents/Scrollbar";
import { Spinner } from "@chakra-ui/react";

function History(props) {

  const entryClickedHandler = (e) => {
    props.chatId(e)
    
  }

  const HistoryContent = (status) => {
    if (status.loading) {
      return <Spinner m="auto" color="teal.200" />
    } else {
      return <>{props.historyData.map((value) => {
        const shown = value.id_title === props.currId;
        // console.log(value.id);
        // console.log(props.currId);
        return (
          <HistoryEntry
            text={value.title}
            key={value.id_title}
            id={value.id_title}
            chosen={shown}
            clickedId={(e) => entryClickedHandler(e)}
            editTitlePayload={(val) => props.editTitlePayload(val)}
            trashPayload={(val) => props.trashPayload(val)}
          />
        );
      })}</>
    }
  } 

  return (
    <Scrollbar>
      
      {HistoryContent(props.status)}

    </Scrollbar>
  );
}

export default History;

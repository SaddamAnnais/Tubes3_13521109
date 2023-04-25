import HistoryEntry from "./HistoryEntry";
import Scrollbar from "../../CustomComponents/Scrollbar";
import { useState } from "react";
import { Skeleton, Spinner, Text } from "@chakra-ui/react";

function History(props) {
  const [chosenId, setChosenId] = useState(-1);

  const entryClickedHandler = (e) => {
    setChosenId(e);
    props.chatId(e)
  }

  const HistoryContent = (status) => {
    if (status.loading) {
      return <Spinner m="auto" color="white" />
    } else if (status.error) {
      return <Text color="red.500" m="auto">{status.msg}</Text>
    } else {
      return <>{props.historyData.map((value) => {
        const shown = value.id === chosenId;
        return (
          <HistoryEntry
            text={value.name}
            key={value.id}
            id={value.id}
            chosen={shown}
            clickedId={(e) => entryClickedHandler(e)}
          />
        );
      })}</>
    }
  } 

  console.log(props.loading)

  return (
    <Scrollbar>
      
      {HistoryContent(props.status)}

    </Scrollbar>
  );
}

export default History;

import HistoryEntry from "./HistoryEntry";
import Scrollbar from "../../CustomComponents/Scrollbar";
import { useState } from "react";

function History(props) {
  const [chosenId, setChosenId] = useState(-1);

  return (
    <Scrollbar>
      {props.historyData &&
        props.historyData.map((value) => {
          const shown = value.id === chosenId;
          return (
            <HistoryEntry
              text={value.name}
              key={value.id}
              id={value.id}
              chosen={shown}
              clickedId={(e) => setChosenId(e)}
            />
          );
        })}
    </Scrollbar>
  );
}

export default History;

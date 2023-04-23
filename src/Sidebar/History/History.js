import { Box } from "@chakra-ui/react";
import HistoryEntry from "./HistoryEntry";
import Scrollbar from "../../CustomComponents/Scrollbar";

const historyData = [
  "How to make a react app",
  "Example of an HTTPS request",
  "Explain AI to 10 years old",
  "How to make a react app",
  "Example of an HTTPS request",
  "Explain AI to 10 years old",
  "How to make a react app",
  "Example of an HTTPS request",
  "Explain AI to 10 years old",
  "How to make a react app",
  "Example of an HTTPS request",
  "Explain AI to 10 years old",
  "How to make a react app",
  "Example of an HTTPS request",
  "Explain AI to 10 years old",
];

function History(props) {
  return (
    <Scrollbar>
      {props.historyData &&
        props.historyData.map((value) => <HistoryEntry text={value.name} key={value.id} />)}
    </Scrollbar>
  );
}

export default History;

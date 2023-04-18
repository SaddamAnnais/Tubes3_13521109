import { Box } from "@chakra-ui/react";
import HistoryEntry from "./HistoryEntry";

const historyData = [
  "How to make a react app",
  "Example of an HTTPS request",
  "Explain AI to 10 years old",
];

function History() {
  return (
    <Box
      overflowY="auto"
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {historyData.map((value) => (
        <HistoryEntry text={value} />
      ))}
    </Box>
  );
}

export default History;

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import Options from "./Sidebar/Options";
import { useEffect, useState } from "react";
import axios from "axios";
import Chat from "./Chat/Chat";
import SendMsgBox from "./Chat/SendMsgBox";

function App() {
  const [history, setHistory] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    msg: "",
  });

  useEffect(() => {
    status.loading = true;
    setStatus(status);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setHistory(response.data);

        const newStatus = {...status}
        newStatus.loading = false;
        setStatus(newStatus);
      })
      .catch((error) => {
        const newStatus = {...status}

        newStatus.loading = false;
        newStatus.error = true;
        newStatus.msg = error.message;
        setStatus(newStatus);
      });
    
    setStatus(status);
  }, []);

  const loadChatHandler = async (e) => {
    status.loading = true;
    setStatus(status);
    try {
      const payload = { id: e };
      const response = await axios.post("API_ENDPOINT_URL", payload);

      const newStatus = {...status}
      newStatus.loading = false;
      setStatus(newStatus);
      
      setChatData(response.data);
    } catch (error) {
      const newStatus = {...status}

      newStatus.loading = false;
      newStatus.error = true;
      newStatus.msg = error.message;
      setStatus(newStatus);
    }
  };
  return (
    <ChakraProvider>
      <Flex direction="row" bgColor="#343541">
        <Sidebar
          historyData={history}
          chatId={(e) => loadChatHandler(e)}
          status={status}
        />
        <Chat data={chatData} status={status} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;

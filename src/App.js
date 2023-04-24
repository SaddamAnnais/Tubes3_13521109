import { ChakraProvider, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import Options from "./Sidebar/Options";
import { useEffect, useState } from "react";
import axios from "axios";
import Chat from "./Chat/Chat";
import SendMsgBox from "./Chat/SendMsgBox";


function App() {
  const [history, setHistory] = useState(null);
  const [status, setStatus] = useState({loading: true, error: false, msg: ""})

  useEffect(() => {
    status.loading = true;
    setStatus(status);

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setHistory(response.data);

        status.loading = false;
        setStatus(status);
        console.log(status);
      })
      .catch(error => {
        status.loading = false;
        status.error = true;
        status.msg = error;
        setStatus(status);        
        console.log(status);
      });
  }, []);

  return (
    <ChakraProvider>
      <Flex direction="row" bgColor="#343541">
        <Sidebar historyData={history}/>
        <Chat />
      </Flex>
    </ChakraProvider>
  );
}

export default App;

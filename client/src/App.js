import { ChakraProvider, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Chat from "./Chat/Chat";
import ErrorModal from "./ErrorModal/ErrorModal";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [history, setHistory] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [chatEffect, setChatEffect] = useState(false);
  const [canSendMessage, setCanSendMessage] = useState(true);
  const [newChat, setNewChat] = useState(true);
  const [userId, setUserId] = useState("");
  const [currentChatId, setCurrentChatId] = useState(uuidv4());
  const [currentAlgo, setCurrentAlgo] = useState("KMP");
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    msg: "",
  });

  useEffect(() => {
    setTimeout(loadHistory(10, 500, getUserId()), 50);
  }, []);

  const getUserId = () => {
    const id = localStorage.getItem("id");
    if (id) {
      setUserId(id);
      return id;
    } else {
      const newUid = uuidv4();
      localStorage.setItem("id", newUid);
      setUserId(newUid);
      return newUid;
    }
  };

  // Done
  const loadHistory = (maxRetries, retryDelay, userId) => {
    let retries = 0;

    const doRequest = () => {
      status.loading = true;
      setStatus(status);

      axios
        .get("https://stima3-api-golang.azurewebsites.net/history/" + userId)
        .then((response) => {
          // console.log(response.data.historyTitle);
          setHistory(response.data.historyTitle);

          const newStatus = { ...status };
          newStatus.loading = false;
          setStatus(newStatus);
        })
        .catch((error) => {
          if (retries < maxRetries) {
            retries++;
            setTimeout(doRequest, retryDelay);
          } else {
            const newStatus = { ...status };

            newStatus.error = true;
            newStatus.msg = error.message;
            setStatus(newStatus);
          }
        });

      setStatus(status);
    };
    doRequest();
  };

  // Done
  const loadChatHandler = (chatId, maxRetries, retryDelay) => {
    setCurrentChatId(chatId);
    setChatEffect(false);
    let retries = 0;

    // console.log(chatId);

    const doRequest = () => {
      axios
        .get(
          "https://stima3-api-golang.azurewebsites.net/chat_history/" + chatId
        )
        .then((response) => {
          setChatData(response.data.chatData);
          if (newChat) setNewChat(false);
        })
        .catch((error) => {
          if (retries < maxRetries) {
            retries++;
            setTimeout(doRequest, retryDelay);
          } else {
            const newStatus = { ...status };

            newStatus.error = true;
            newStatus.msg = error.message;
            setStatus(newStatus);
          }
        });

      setStatus(status);
    };

    doRequest();
  };

  // Done
  const newUsrMsgHandler = (newMsg, maxRetries, retryDelay) => {
    if (newChat)
      setHistory([{ id_title: currentChatId, title: "New Chat" }, ...history]);

    setChatEffect(true);
    setCanSendMessage(false);

    let retries = 0;
    const payload = { message: newMsg, algo: currentAlgo };
    const newUsrMsg = [...chatData, { user: newMsg, bot: null }];
    setChatData(newUsrMsg);

    if (newChat) {
      setNewChat(false);
    }

    // console.log(payload);

    const doRequest = () => {
      axios
        .post(
          "https://stima3-api-golang.azurewebsites.net/user_respond/" +
            userId +
            "/" +
            currentChatId,
          payload
        )
        .then((response) => {
          const newBotResponse = [
            ...chatData,
            { user: newMsg, bot: response.data.respond },
          ];
          setChatData(newBotResponse);
          setCanSendMessage(true);

          // console.log(response);
        })
        .catch((error) => {
          if (retries < maxRetries) {
            retries++;
            setTimeout(doRequest, retryDelay);
          } else {
            const newStatus = { ...status };
            // newStatus.loading = false;
            newStatus.error = true;
            newStatus.msg = error.message;
            setStatus(newStatus);
          }
        });

      setStatus(status);
    };
    doRequest();
  };

  // Not done, server error
  const editTitlePayloadHandler = (newTitle, maxRetries, retryDelay) => {
    let retries = 0;
    const payload = { nama: newTitle.newTitleName };
    // console.log(payload);
    const doRequest = () => {
      axios
        .post(
          "https://stima3-api-golang.azurewebsites.net/rename_history/" +
            newTitle.id,
          payload
        )
        .catch((error) => {
          if (retries < maxRetries) {
            retries++;
            setTimeout(doRequest, retryDelay);
          } else {
            const newStatus = { ...status };
            // newStatus.loading = false;
            newStatus.error = true;
            newStatus.msg = error.message;
            setStatus(newStatus);
          }
        });

      setStatus(status);
    };
    doRequest();
  };

  const deleteChatHandler = (deleteId, maxRetries, retryDelay) => {
    let retries = 0;

    setNewChat(true);

    const doRequest = () => {
      axios
        .delete(
          "https://stima3-api-golang.azurewebsites.net/delete_history/" +
            deleteId.id
        )
        .then((response) => {
          // console.log(response);
          const newChatId = uuidv4();
          setCurrentChatId(newChatId);
          setChatData([]);
        })
        .catch((error) => {
          if (retries < maxRetries) {
            retries++;
            setTimeout(doRequest, retryDelay);
          } else {
            const newStatus = { ...status };

            newStatus.error = true;
            newStatus.msg = error.message;
            setStatus(newStatus);
          }
        });

      setStatus(status);
    };
    doRequest();
  };

  const newChatSignalHandler = () => {
    const newId = uuidv4();
    setCurrentChatId(newId);
    setChatData([]);
    setNewChat(true);
    // console.log(newId);
  };

  return (
    <ChakraProvider>
      <Flex direction="row" bgColor="#343541">
        <Sidebar
          historyData={history}
          chatId={(id) => loadChatHandler(id, 10, 500)}
          currId={currentChatId}
          status={status}
          editTitlePayload={(newTitle) =>
            editTitlePayloadHandler(newTitle, 10, 500)
          }
          trashPayload={(val) => deleteChatHandler(val, 10, 500)}
          newChatSignal={newChatSignalHandler}
          algo={(newAlgo) => setCurrentAlgo(newAlgo)}
        />
        <Chat
          newChat={newChat}
          data={chatData}
          status={status}
          id={currentChatId}
          newUsrMsg={(msg) => newUsrMsgHandler(msg, 10, 500)}
          chatEffect={chatEffect}
          canSendMessage={canSendMessage}
        />
      </Flex>
      <ErrorModal isOpen={status.error} msg={status.msg} />
    </ChakraProvider>
  );
}

export default App;

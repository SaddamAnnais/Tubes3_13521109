import History from "./History/History";
import Options from "./Options";

function Sidebar(props) {
  // console.log(props.loading)
  return (
    <Options newChatSignal={() => props.newChatSignal()} algo={(newAlgo) => props.algo(newAlgo)}>
      <History
        historyData={props.historyData}
        chatId={(e) => props.chatId(e)}
        status={props.status}
        editTitlePayload={(val) => props.editTitlePayload(val)}
        currId={props.currId}
        trashPayload={(val) => props.trashPayload(val)}
      />
    </Options>
  );
}

export default Sidebar;

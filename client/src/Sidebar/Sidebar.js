import History from "./History/History";
import Options from "./Options";

function Sidebar(props) {
  console.log(props.loading)
  return (
    <Options>
      <History
        historyData={props.historyData}
        chatId={(e) => props.chatId(e)}
        status={props.status}
      />
    </Options>
  );
}

export default Sidebar;

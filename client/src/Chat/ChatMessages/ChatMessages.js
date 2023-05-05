import { Spacer, VStack } from "@chakra-ui/react";
import MessageEntry from "./MessageEntry";
import React, { useEffect, useRef } from "react";

function ChatMessages(props) {
  const containerRef = useRef(null);

  const setToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    setTimeout(setToBottom, 80);
  }, [props.data]);

  return (
    <VStack
      maxH="100vh"
      overflowY="auto"
      w="100%"
      spacing="0"
      bgColor="#343541"
      ref={containerRef}
      scrollBehavior="smooth"
    >
      {props.data.map((value, index) => {
        const key = `message-${index}`;
        return (
          <React.Fragment key={key}>
            <MessageEntry
              msg={value.user}
              bot={false}
              key={key + "-usr"}
              effect={props.chatEffect}
            />
            <MessageEntry
              msg={value.bot}
              bot={true}
              key={key + "-bot"}
              effect={props.chatEffect}
              toBottom={setToBottom}
            />
          </React.Fragment>
        );
      })}

      <Spacer w="full" minH="10rem" />
    </VStack>
  );
}

export default ChatMessages;

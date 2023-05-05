import { Box, HStack, Icon, Spacer, Text, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUser, FaUserAstronaut } from "react-icons/fa";

const blink = keyframes`
50% {
  opacity: 0;
}
`;

function MessageEntry(props) {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);

  useEffect(() => {
    if (props.msg !== null) {
      const messageLength = props.msg.length;
      if (props.bot && props.effect) {
        if (currentMsgIndex < messageLength) {
          const timeoutId = setTimeout(() => {
            setCurrentMsgIndex(currentMsgIndex + 1);
            props.toBottom();
          }, 15);
          return () => clearTimeout(timeoutId);
        }
      } else {
        setCurrentMsgIndex(messageLength);
      }
    }
  }, [currentMsgIndex, props.msg]);

  const displayedMessage = () => {
    if (props.msg === null)
      return (
        <Text as="span" animation={`${blink} 1s step-end infinite`}>
          ▋
        </Text>
      );
    if (currentMsgIndex < props.msg.length)
      return (
        <>
          {props.msg.slice(0, currentMsgIndex)}
          <Text as="span" animation={`${blink} 1s step-end infinite`}>
            ▋
          </Text>
        </>
      );

    return props.msg;
  };

  return (
    <HStack
      bgColor={props.bot ? "#444654" : "#343541"}
      align="top"
      py="2rem"
      spacing="1rem"
      pl={["0%", "10%", "20%"]}
      w="100%"
    >
      <Box
        mr="1rem"
        borderRadius="md"
        w="2.5rem"
        h="2.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={props.bot ? "teal" : "#202123"}
      >
        <Icon
          as={props.bot ? FaUserAstronaut : FaUser}
          color="white"
          boxSize="1.5rem"
        />
      </Box>
      <Text color="white" maxW={["95%", "80%", "60%"]} whiteSpace="pre-wrap" >
        {displayedMessage()}
      </Text>
      <Spacer />
    </HStack>
  );
}

export default MessageEntry;

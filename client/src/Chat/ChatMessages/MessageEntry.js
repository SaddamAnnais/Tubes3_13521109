import { Box, HStack, Icon, Spacer, Text } from "@chakra-ui/react";
import { FaUser, FaUserAstronaut } from "react-icons/fa";

function MessageEntry(props) {
  return (
    <HStack bgColor={props.bot? "#444654" : "#343541"} align="top" py="2rem" spacing="1rem" pl={["0%", "10%", "20%"]} w="100%">
      <Box
        mr="1rem"
        bgColor="#202123"
        borderRadius="md"
        w="2.5rem"
        h="2.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        
      >
        <Icon as={props.bot? FaUserAstronaut : FaUser} color="white" boxSize="1.5rem"  />
      </Box>
      <Text color="white" maxW={["95%", "80%", "60%"]} >
        {props.msg}
      </Text>
      <Spacer />
    </HStack>
  );
}

export default MessageEntry;

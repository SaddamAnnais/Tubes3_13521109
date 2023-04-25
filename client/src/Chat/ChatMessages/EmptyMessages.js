import { Flex, Heading, Text } from "@chakra-ui/react";

function EmptyMessages(props) {
  return (
    <Flex h="full" w="full" justifyContent="center" align="center">
      <Heading fontSize="3.5rem" fontWeight="bold" color="teal.300" mb="15rem">
        ChatBjorka
      </Heading>
    </Flex>
  );
}

export default EmptyMessages;

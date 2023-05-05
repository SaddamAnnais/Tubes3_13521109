import { Flex, Heading } from "@chakra-ui/react";

function EmptyMessages() {
  return (
    <Flex h="full" w="full" justifyContent="center" align="center">
      <Heading fontSize="3.5rem" fontWeight="bold" color="teal.300" mb="15rem">
        ChatBjorka
      </Heading>
    </Flex>
  );
}

export default EmptyMessages;

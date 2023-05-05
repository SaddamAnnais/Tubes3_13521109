import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Spacer,
  Text,
  VStack,
  useRadioGroup,
} from "@chakra-ui/react";
import RadioCard from "./RadioCard";

function Options(props) {
  const options = ["KMP", "BM"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "algorithm",
    defaultValue: "KMP",
    onChange: props.algo,
  });

  return (
    <VStack
      zIndex="modal"
      bgColor="#202123"
      w="21rem"
      p="0.7rem"
      h="100vh"
      as="nav"
      minW="16rem"
    >
      <Button
        bgColor="transparent"
        w="100%"
        h="3rem"
        color="white"
        borderWidth="1px"
        borderColor="gray.500"
        _hover={{ bgColor: "#3A3C40" }}
        leftIcon={<AddIcon boxSize="0.8rem" />}
        onClick={() => props.newChatSignal()}
      >
        <Text fontSize="md" fontWeight="500">
          New Chat
        </Text>
      </Button>
      {props.children}
      <Spacer />
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            <Text fontSize="md" fontWeight="500">
              {value}
            </Text>
          </RadioCard>
        );
      })}
    </VStack>
  );
}

export default Options;

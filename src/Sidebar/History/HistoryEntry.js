import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { MdComment } from "react-icons/md";

function HistoryEntry(props) {
  return (
    <Button
      h="3rem"
      minH="3rem"
      w="100%"
      my="0.5rem"
      bgColor="transparent"
      color="white"
      pl="0.6rem"
      _hover={{ bgColor: "#3A3C40" }}
      mt="0"
      mb="0.3rem"
    >
      <Box transform="scaleX(-1)" mt="0.4rem" ml="0">
        <Icon as={MdComment} boxSize="1.2rem" />
      </Box>
      <Text
        w="100%"
        textAlign="left"
        ml="0.6rem"
        fontWeight="500"
        color="white"
        overflow="hidden"
        bgGradient="linear(to-r, white 80%, transparent 100%)"
        bgClip="text"
        fontSize="sm"
      >
        {props.text}
      </Text>
    </Button>
  );
}

export default HistoryEntry;

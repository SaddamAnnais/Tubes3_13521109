import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { MdComment } from "react-icons/md";

function HistoryEntry(props) {
  return (
    <Button h="3rem" w="100%" my="0.5rem" bgColor="transparent" color="white" pl="0.6rem" >
      <Box transform="scaleX(-1)" mt="0.4rem" ml="0">
        <Icon as={MdComment} boxSize="1.2rem" />
      </Box>
      {/* <Box
        bgClip="text"
        overflow="hidden"
      > */}
        <Text
          w="100%"
          textAlign="left"
          ml="0.6rem"
          fontWeight="400"
          color="white"
          overflow="hidden"
          bgGradient='linear(to-r, white 80%, transparent 100%)'
          bgClip="text"
        >
          {props.text}
        </Text>
      {/* </Box> */}
    </Button>
  );
}

export default HistoryEntry;

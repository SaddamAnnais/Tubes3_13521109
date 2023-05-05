import { Box, Flex, Icon, Input, Spacer } from "@chakra-ui/react";
import { MdComment, MdOutlineDelete } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

function HistoryEntry(props) {
  const [titleName, setTitleName] = useState(props.text);
  const changeTitleRef = useRef(null);
  const [deleted, setDeleted] = useState(false);
  const [isNotEditable, setIsNotEditable] = useState(true);

  useEffect(() => {
    if (props.chosen) setIsNotEditable(props.chosen);
    else setIsNotEditable(!props.chosen);
    
  }, [props.chosen])

  const HandleConfirmEdit = () => {
    setIsNotEditable(true);
    if (changeTitleRef.current.value !== titleName) {
      const editTitlePayload = {id : props.id, newTitleName: changeTitleRef.current.value.substring(0, 255)}            
      setTitleName(changeTitleRef.current.value);
      props.editTitlePayload(editTitlePayload);
    }
  };

  const HandleTrashButton = () => {
    const trashPayload = {id : props.id}
    props.trashPayload(trashPayload);
    setDeleted(true);
  };

  const entryClickedHandler= () => {
    props.clickedId(props.id)
  }

  const checkButton = (
    <>
      <Box
        as="button"
        mt="0.4rem"
        ml="0.4rem"
        color="grey.400"
        onClick={HandleConfirmEdit}
      >
        <Icon as={BsCheckLg} boxSize="1.2rem" />
      </Box>
    </>
  );

  const editAndTrashButton = (
    <>
      <Box
        as="button"
        mt="0.4rem"
        ml="0.4rem"
        onClick={() => setIsNotEditable(false)}
        color="gray.400"
        _hover={{ color: "white" }}
      >
        <Icon as={ImPencil} boxSize="0.9rem" />
      </Box>
      <Box
        as="button"
        mt="0.4rem"
        ml="0.4rem"
        onClick={HandleTrashButton}
        color="gray.400"
        _hover={{ color: "white" }}
      >
        <Icon as={MdOutlineDelete} boxSize="1.2rem" />
      </Box>
    </>
  );

  const RightSideButton = (
    <>
      {isNotEditable && editAndTrashButton}
      {!isNotEditable && checkButton}
    </>
  );

  const entry = (
    <Flex
      dir="row"
      alignItems="center"
      h="3rem"
      minH="3rem"
      w="100%"
      bgColor={props.chosen ? "#3A3C40" : "transparent"}
      color="white"
      px="0.4rem"
      _hover={{ bgColor: props.chosen ? "#3A3C40" : "#2b2c2e" }}
      mt="0"
      mb="0.3rem"
      borderRadius="lg"
      onClick={entryClickedHandler}
    >
      <Box transform="scaleX(-1)" mt="0.4rem" ml="0.3rem">
        <Icon as={MdComment} boxSize="1.2rem" />
      </Box>
      <Input
        w="100%"
        ml="0.6rem"
        pr="0.3rem"
        pl="0.6rem"
        fontWeight="500"
        color="white"
        fontSize="sm"
        defaultValue={titleName}
        border="1px solid white"
        isDisabled={isNotEditable}
        _disabled={{
          opacity: "1",
          cursor: "default",
          border: "None",
          overflow: "hidden",
          bgGradient: "linear(to-r, white 70%, transparent 95%)",
          bgClip: "text",
        }}
        ref={changeTitleRef}
      />

      <Spacer />
      {props.chosen && RightSideButton}
    </Flex>
  );

  return <>{!deleted && entry}</>;
}

export default HistoryEntry;

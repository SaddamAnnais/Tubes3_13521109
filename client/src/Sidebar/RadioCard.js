import { Box, useRadio } from "@chakra-ui/react";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w="100%">
      <input {...input} />
      <Box
        {...checkbox}
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        color="white"
        borderColor="gray.400"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        py="auto"
        px="auto"
        h="2.5rem"
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioCard;

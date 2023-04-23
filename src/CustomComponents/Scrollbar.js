import { Box } from "@chakra-ui/react";

function Scrollbar(props) {
  const scrollbarStyles = {
    width: props.w ? props.w : "8px",
  };

  const scrollbarTrackStyles = {
    "background-color": props.trackColor ? props.trackColor : "transparent",
    
  };

  const scrollbarThumbStyles = {
    "border-width": "1px",
    "border-style": "solid", 
    "border-radius": props.borderRadius ? props.borderRadius : "4px",
    "border-color": props.borderColor ? props.borderColor : "grey",
    "background-color": props.thumbColor ? props.thumbColor : "#transparent",
  };

  return (
    <Box
      overflowY="auto"
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {props.children}
      <style>
        {`
            ::-webkit-scrollbar {
              ${Object.entries(scrollbarStyles)
                .map(([prop, value]) => `${prop}: ${value};`)
                .join("")}
            }

            ::-webkit-scrollbar-track {
              ${Object.entries(scrollbarTrackStyles)
                .map(([prop, value]) => `${prop}: ${value};`)
                .join("")}
            }

            ::-webkit-scrollbar-thumb {
              ${Object.entries(scrollbarThumbStyles)
                .map(([prop, value]) => `${prop}: ${value};`)
                .join("")}
            }
          `}
      </style>
    </Box>
  );
}

export default Scrollbar;

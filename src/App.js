import { ChakraProvider, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import Options from "./Sidebar/Options";


function App() {
  return (
    <ChakraProvider>
      <Flex direction="column">
        <Sidebar />
      {/* <Options /> */}
      </Flex>
    </ChakraProvider>
  );
}

export default App;

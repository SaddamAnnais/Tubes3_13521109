import { Flex, Spacer, VStack } from "@chakra-ui/react";
import MessageEntry from "./MessageEntry";

const msgBot =
  "The difficulty of a language is subjective and can vary depending on various factors, including a person's native language, linguistic background, and personal learning style. However, some languages are widely considered to be more challenging than others due to their complex grammar, intricate writing system, or the lack of similarity with other languages. For example, languages like Arabic, Mandarin Chinese, Japanese, and Korean are often considered difficult due to their complex writing systems, while languages like Hungarian, Finnish, and Estonian are known for their complex grammar and word structure. Other challenging languages include Navajo, Icelandic, Russian, and various indigenous languages of Africa and the Americas. Overall, it's important to note that the difficulty of a language is subjective and varies from person to person. With dedication, practice, and patience, anyone can learn a new language regardless of its perceived difficulty.";

const msgUser = "what is the most difficult language";

function ChatMessages(props) {
  return (
    <VStack
      maxH="100vh"
      overflowY="auto"
      w="100%"
      spacing="0"
      bgColor="#343541"
    >
      <MessageEntry bot={false} msg={msgUser} />
      <MessageEntry bot={true} msg={msgBot} />
      <MessageEntry bot={false} msg={msgUser} />
      <MessageEntry bot={true} msg={msgBot} />
      <MessageEntry bot={false} msg={msgUser} />
      <MessageEntry bot={true} msg={msgBot} />
      <Spacer w="full" minH="10rem" />
    </VStack>
  );
}

export default ChatMessages;

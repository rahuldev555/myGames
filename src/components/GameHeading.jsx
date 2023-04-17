import { Heading } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      <ChakraLink
        _focus={{ boxShadow: "none", outline: "none" }}
        target="_blank"
        fontWeight={600}
        color="gray.400"
        bgClip="text"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        {heading}
      </ChakraLink>{" "}
    </Heading>
  );
};

export default GameHeading;

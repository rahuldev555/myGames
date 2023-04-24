import { Link as ChakraLink, Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import usePlatform from "./hooks/usePlatform";
import useGenre from "./hooks/useGenre";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
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

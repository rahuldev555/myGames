import {
  Button,
  Link as ChakraLink,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import useGenres from "./hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  return (
    <>
      <Heading fontSize="3xl" marginBottom={3}>
        <ChakraLink
          _focus={{ boxShadow: "none", outline: "none" }}
          target="_blank"
          fontWeight={600}
          color="gray.400"
          bgClip="text"
          bgGradient="linear(to-l,#FF0080, #7928CA)"
          _hover={{
            bgGradient: "linear(to-l,yellow.500, red.500 )",
          }}
        >
          Genres
        </ChakraLink>
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Button
                whiteSpace={"normal"}
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="xl"
                variant="link"
                fontWeight={
                  genre.id === selectedGenreId ? "extrabold" : "semibold"
                }
              >
                <Text
                  bgGradient="linear(to-r, teal.300, pink.200)"
                  bgClip="text"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

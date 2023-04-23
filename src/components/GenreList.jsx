import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ selectedGenre, onSelectGenre }) => {
  const { data, isLoading, error } = useGenres();
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
                onClick={() => onSelectGenre(genre)}
                fontSize="xl"
                variant="link"
                fontWeight={
                  genre.id === selectedGenre?.id ? "extrabold" : "semibold"
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

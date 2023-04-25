import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "./hooks/useScreenshots";

const GameScreenshots = ({ gameId }) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid spacing={5} columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image
          key={file.id}
          src={file.image}
          _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
          }}
          borderRadius={20}
          overflow="hidden"
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;

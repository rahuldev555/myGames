import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../components/hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="gray.200"
        color="teal.300"
        size="xl"
      />
    );
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;

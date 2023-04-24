import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Fragment } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const GameGrid = ({ gameQuery }) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          rightIcon={<ArrowDownIcon />}
          marginY={5}
          onClick={() => fetchNextPage()}
          size="md"
          height="48px"
          width="120px"
          border="2px"
          borderColor="green.300"
        >
          {isFetchingNextPage ? "Loading..." : "Load More "}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;

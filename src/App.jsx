import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <Box
          w="100%"
          h="95px"
          bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        >
          <NavBar />
        </Box>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
      {/* <GridItem>
        <Footer />
      </GridItem> */}
    </Grid>
  );
};

export default App;

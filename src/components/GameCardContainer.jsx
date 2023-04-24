import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden" boxShadow="dark-lg">
      {children}
    </Box>
  );
};

export default GameCardContainer;

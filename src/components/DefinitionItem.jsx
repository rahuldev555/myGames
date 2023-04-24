import { Box, Heading } from "@chakra-ui/react";

const DefinitionItem = ({ term, children }) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="teal.400">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;

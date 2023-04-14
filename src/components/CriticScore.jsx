import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }) => {
  let color = score > 85 ? "pink" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius="4px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;

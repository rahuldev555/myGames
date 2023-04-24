import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ children }) => {
  const [expand, setExpand] = useState();
  const limit = 300;

  if (!children) return null;

  if (children <= limit) return <Text>{children}</Text>;

  const summary = expand ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpand(!expand)}
        marginLeft={2}
        colorScheme="teal"
        size="xs"
        fontWeight="bold"
      >
        {expand ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;

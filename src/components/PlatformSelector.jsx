import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import usePlatforms from "./hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const selectedPlatform = usePlatforms(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton
        colorScheme="teal"
        variant="outline"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<HamburgerIcon />}
            colorScheme="teal"
            variant="outline"
            onClick={onShowSidebar}
            margin={2}
          />
        )}
      </Box>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

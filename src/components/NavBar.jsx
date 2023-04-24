import { HStack, Icon } from "@chakra-ui/react";
import { SiAmazongames } from "react-icons/si";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack padding="20px" justifyContent="space-between">
        <Icon as={SiAmazongames} boxSize="70px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;

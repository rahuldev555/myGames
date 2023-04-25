import { HStack, Icon } from "@chakra-ui/react";
import { SiAmazongames } from "react-icons/si";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="20px" justifyContent="space-between">
      <Link to="/">
        <Icon as={SiAmazongames} boxSize="70px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

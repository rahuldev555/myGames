import { HStack, Image, Text, Icon } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { SiAmazongames } from "react-icons/si";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      <HStack padding="10px" justifyContent="space-evenly">
        <Icon as={SiAmazongames} boxSize="80px" />

        <SearchInput onSearch={onSearch} />
      </HStack>
    </div>
  );
};

export default NavBar;

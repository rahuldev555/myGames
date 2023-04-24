import { HStack, Icon } from "@chakra-ui/react";
import { SiAmazongames } from "react-icons/si";
import SearchInput from "./SearchInput";

const NavBar = ({ onSearch }) => {
  return (
    <>
      <HStack padding="10px">
        <Icon as={SiAmazongames} boxSize="80px" />
        <SearchInput onSearch={onSearch} />
      </HStack>
    </>
  );
};

export default NavBar;

import {
  HStack,
  Image,
  Text,
  Icon,
  useMediaQuery,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { SiAmazongames } from "react-icons/si";

const NavBar = ({ onSearch }) => {
  return (
    <>
      <HStack padding="10px">
        <Menu>
          <MenuButton
            onClick={() => toggleMenuHandler()}
            as={IconButton}
            aria-label="Options"
            variant="outline"
          />
        </Menu>
        <Icon as={SiAmazongames} boxSize="80px" />
        <SearchInput onSearch={onSearch} />
      </HStack>
    </>
  );
};

export default NavBar;

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <Text>Rahul's Game's Store</Text>
      </HStack>
    </div>
  );
};

export default NavBar;

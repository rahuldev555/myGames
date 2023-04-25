import {
  Box,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  VStack,
} from "@chakra-ui/react";
import GenreList from "./GenreList";

const SidebarContent = () => (
  <VStack w="100%">
    <GenreList />
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box position="fixed" left={0} p={5} w="200px" top={0} h="100%">
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading fontSize="3xl" marginBottom={3}>
              <ChakraLink
                _focus={{ boxShadow: "none", outline: "none" }}
                target="_blank"
                fontWeight={600}
                color="gray.400"
                bgClip="text"
                bgGradient="linear(to-l,#FF0080, #7928CA)"
                _hover={{
                  bgGradient: "linear(to-l,yellow.500, red.500 )",
                }}
              >
                Genres
              </ChakraLink>
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;

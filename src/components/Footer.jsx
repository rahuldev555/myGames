import {
  Container,
  Box,
  Link as ChakraLink,
  Text,
  Stack,
  HStack,
} from "@chakra-ui/react";

// Here we have used react-icons package for the icons

const Footer = () => {
  return (
    <>
      <Container
        as="footer"
        role="contentinfo"
        marginLeft={{ lg: 500 }}
        py={{ base: "12", md: "16", lg: "10" }}
      >
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="center" direction="column" align="center">
            <Text color="gray.500">
              Made with 💗 by{" "}
              <ChakraLink
                _focus={{ boxShadow: "none", outline: "none" }}
                target="_blank"
                fontWeight={700}
                color="gray.600"
                bgClip="text"
                fontSize="2xl"
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
              >
                RaHul Darla
              </ChakraLink>{" "}
            </Text>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Inc. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;

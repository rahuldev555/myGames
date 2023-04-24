import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

{
  /* <GridItem area="nav">
<Box
  w="100%"
  h="95px"
  bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
>
  <NavBar />
</Box>
</GridItem> */
}

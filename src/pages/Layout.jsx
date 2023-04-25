import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <Box ml={!variants?.navigationButton && 200}>
        <NavBar
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
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

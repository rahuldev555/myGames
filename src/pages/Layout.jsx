import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
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

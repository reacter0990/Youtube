import React from "react";
import { Box } from "@mui/material";
import LeftBox from "./NavbarItems/LeftBox";
import CenterBox from "./NavbarItems/CenterBox";
import RightBox from "./NavbarItems/RightBox";
// import Logo from '../assets/YouTube-Logo.wine.svg'

const Navbar: React.FC = () => {
  return (
    <Box
      pt={1.2}
      pl={3}
      pr={3}
      flexGrow={1}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <LeftBox />
      <CenterBox />
      <RightBox />
    </Box>
  );
};

export default Navbar;

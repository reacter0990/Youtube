import { Box } from "@mui/material";
import React from "react";

interface BlockProps {
  index: number;
  name: string;
}

const Block: React.FC<BlockProps> = ({index, image, title, logo, description, chanel_name,}) => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "265px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box>
        <img src={image} alt="" />
      </Box>
    </Box>
  );
};

export default Block;

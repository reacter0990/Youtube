import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface BlockProps {
  index: number;
  name: string;
}

const Block: React.FC<BlockProps> = ({
  index,
  img,
  title,
  logo,
  description,
  chanel_name,
}) => {
  return (
    <Box
      sx={{
        width: "378px",
        height: "330px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxHeight: "230px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
        }}
      >
        <img style={{ width: "100%", objectFit: "cover" }} src={img} alt="" />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          alignItems: "start",
          columnGap: "5px",
          paddingTop: "5px",
        }}
      >
        <Box
          sx={{
            maxWidth: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            overflow: "hidden",
            pt: 1.2,
          }}
        >
          <img
            style={{ objectFit: "cover", width: "100%" }}
            src={logo}
            alt=""
          />
        </Box>
        <Box sx={{ pt: 0.8 }}>
          <ListItemText
            primary={title}
            sx={{ color: "#ffff", maxWidth: "250px" }}
            className=""
            primaryTypographyProps={{ style: { fontSize: 16 } }}
          />
          <Box>
            <ListItemText
              primary={chanel_name}
              sx={{ color: "#aaa" }}
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
            <ListItemText
              primary={description}
              sx={{ color: "#aaa" }}
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 1.1 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemButton
              sx={{
                pl: 1,
                pr: 1,
                pb: 1.4,
                pt: 1.4,
                borderRadius: 50,
                maxWidth: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 50,
                  ml: 4.5
                }}
              >
                <HiOutlineDotsVertical color={"#fff"} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Box>
      </Box>
    </Box>
  );
};

export default Block;

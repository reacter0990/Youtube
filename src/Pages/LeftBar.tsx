import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { IoMdHome } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { CiYoutube } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const LeftBar = () => {
  return (
    <Box width={240}>
      <List sx={{ pt: 2, pl: 2, pr: 2, pb: 0, height: "100%" }}>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            sx={{
              bgcolor: "#212121",
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <IoMdHome color="#fff" fontSize={25} />
            </ListItemIcon>
            <ListItemText
              primary="Главная"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            sx={{
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <SiYoutubeshorts color="#fff" fontSize={22} />
            </ListItemIcon>
            <ListItemText
              primary="Shorts"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            sx={{
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <MdOutlineSubscriptions color="#fff" fontSize={22} />
            </ListItemIcon>
            <ListItemText
              primary="Подписки"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </ListItemButton>
        </ListItem>
        <Divider
          component="li"
          sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 2 }}
        />
      </List>
      <Typography
        component={"div"}
        variant="h6"
        color="white"
        pl={4}
        fontSize={17}
      >
        Вы
      </Typography>
      <List sx={{ pl: 2, pr: 2, height: "100%" }}>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            sx={{
              bgcolor: "#212121",
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <GoHistory color="#fff" fontSize={23} />
            </ListItemIcon>
            <ListItemText
              primary="История"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            sx={{
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <CgPlayList
                style={{ paddingRight: 10 }}
                color="#fff"
                fontSize={40}
              />
            </ListItemIcon>
            <ListItemText
              primary="Shorts"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            sx={{
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <MdOutlineSubscriptions color="#fff" fontSize={22} />
            </ListItemIcon>
            <ListItemText
              primary="Подписки"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </ListItemButton>
        </ListItem>
        <Divider
          component="li"
          sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 2 }}
        />
      </List>
    </Box>
  );
};

export default LeftBar;

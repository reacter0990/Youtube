import React, { useState } from "react";
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
  const [isFocused_1, setIsFocused_1] = useState(false);
  const [isFocused_2, setIsFocused_2] = useState(false);
  const [isFocused_3, setIsFocused_3] = useState(false);
  const [isFocused_4, setIsFocused_4] = useState(false);
  const [isFocused_5, setIsFocused_5] = useState(false);
  return (
    <Box width={240}>
      <List
        sx={{
          pt: 2,
          pl: 2,
          pr: 2,
          pb: 0,
          height: "100%",
          display: "grid",
          gridTemplateColumns: "auto",
          rowGap: "3px",
        }}
      >
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
            onMouseEnter={() => setIsFocused_1(true)}
            onMouseLeave={() => setIsFocused_1(false)}
            style={{
              backgroundColor: isFocused_1 ? "#212121" : "transparent",
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
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
            onMouseEnter={() => setIsFocused_2(true)}
            onMouseLeave={() => setIsFocused_2(false)}
            style={{
              backgroundColor: isFocused_2 ? "#212121" : "transparent",
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
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
            onMouseEnter={() => setIsFocused_3(true)}
            onMouseLeave={() => setIsFocused_3(false)}
            style={{
              backgroundColor: isFocused_3 ? "#212121" : "transparent",
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
            onMouseEnter={() => setIsFocused_4(true)}
            onMouseDown={() => setIsFocused_4(true)}
            onMouseLeave={() => setIsFocused_4(false)}
            style={{
              backgroundColor: isFocused_4 ? "#212121" : "transparent",
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
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
            onMouseEnter={() => setIsFocused_5(true)}
            onMouseLeave={() => setIsFocused_5(false)}
            style={{
              backgroundColor: isFocused_5 ? "#212121" : "transparent",
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

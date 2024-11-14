import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useSpring, animated } from "@react-spring/web";

interface BlockProps {
  index: number;
  img: picture;
  title: string;
  logo: picture;
  description: string;
  chanel_name: string;
}

const Block: React.FC<BlockProps> = ({
  index,
  img,
  title,
  logo,
  description,
  chanel_name,
  isOpen
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [settings, setSettings] = useState(false);

  const handleOpen = () => {
    setSettings(true);
  };

  const listOfSettings = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path>
        </svg>
      ),
      title: "Добавить в очередь",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
        </svg>
      ),
      title: "Смотреть позже",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <path d="M18 4v15.06l-5.42-3.87-.58-.42-.58.42L6 19.06V4h12m1-1H5v18l7-5 7 5V3z"></path>
        </svg>
      ),
      title: "Добавить в плейлист",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
        </svg>
      ),
      title: "Скачать",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
        </svg>
      ),
      title: "Поделиться",
    },
  ];

  const listOfSettings_2 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <path
            d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM3 12c0 2.31.87 4.41 2.29 6L18 5.29C16.41 3.87 14.31 3 12 3c-4.97 0-9 4.03-9 9zm15.71-6L6 18.71C7.59 20.13 9.69 21 12 21c4.97 0 9-4.03 9-9 0-2.31-.87-4.41-2.29-6z"
            fill-rule="evenodd"
          ></path>
        </svg>
      ),
      title: "Не интересует",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <g>
            <path d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm7 11H5v-2h14v2z"></path>
          </g>
        </svg>
      ),
      title: "Не рекомендовать видео с этого канала",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
        >
          <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
        </svg>
      ),
      title: "Пожаловаться",
    },
  ];
  return (
    <Box
      sx={{
        maxWidth: isOpen ? "370px" : '430px',
        height: isOpen ? "330px" : '354px',
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Link
        style={{ maxWidth: "370px", textDecoration: "none" }}
        to={`/link/${index}`}
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
      </Link>
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
            primaryTypographyProps={{ style: { fontSize: 16 } }}
          />
          <Box>
            <Tooltip title="Davidich Top" placement="top-start">
              <ListItemText
                primary={chanel_name}
                sx={{ color: "#aaa" }}
                primaryTypographyProps={{ style: { fontSize: 14 } }}
              />
            </Tooltip>
            <ListItemText
              primary={description}
              sx={{ color: "#aaa" }}
              primaryTypographyProps={{ style: { fontSize: 14 } }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 1.1 }}>
          {settings && (
            <Box
              sx={{
                pl: 1,
                pr: 1,
                pt: 0.7,
                pb: 0.7,
                borderRadius: 3,
                bgcolor: "#242424",
                maxHeight: "40px",
                maxWidth: "40px",
              }}
            >
              <List sx={{ display: "grid", gridTemplateColumns: "auto" }}>
                {listOfSettings.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <Divider />
              <List>
                {listOfSettings_2.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemButton sx={{ pb: 0.2, pt: 0.2 }}>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </Box>
          )}
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
                background: isFocused ? "#212121" : "transparent",
              }}
              onMouseEnter={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
              onClick={handleOpen}
            >
              <ListItemIcon
                sx={{
                  minWidth: 50,
                  ml: 4.5,
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

import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import classes from '../CSS/main.module.css';

interface BottomBarProps {
  id: number;
}

const BottomBar: React.FC<BottomBarProps> = ({}) => {
  return (
    <Box
      sx={{
        pl: 1,
        pr: 1,
        pt: 0.2,
        pb: 0.2,
        position: "fixed",
        width: "100%",
        maxWidth: "1200px",
        top: "68px",
        bgcolor: "#0f0f0f",
        left: "261px",
        zIndex: 99,
      }}
    >
      <List
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: "12px",
        }}
      >
        <ListItem sx={{ p: 0, maxWidth: 56 }}>
          <ListItemButton
            sx={{
              bgcolor: '#fff',
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
          >
            <ListItemText
              primary="Все"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#000" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 83 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Музыка"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 121 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
          >
            <ListItemText
              primary="Теленовеллы"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 82 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Джемы"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 104 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Видеоигры"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 102 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Скетч-шоу"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 100 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Анимация"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 58 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Рэп"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 140 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Сейчас в эфире"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0, maxWidth: 208 }}>
          <ListItemButton
            sx={{
              bgcolor: "#323232",
              borderRadius: 2,
              pt: 0.4,
              pb: 0.4,
            }}
            className={classes.otherLink}
          >
            <ListItemText
              primary="Недавно опубликованные"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default BottomBar;

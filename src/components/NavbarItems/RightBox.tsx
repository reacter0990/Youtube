import React, { useState } from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import {
  Box,
  IconButton,
  Avatar,
  ListItemButton,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { IoMdNotificationsOutline } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import { IoLogoGoogle } from "react-icons/io5";
import { BiSolidUserAccount } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import classes from '../../CSS/main.module.css'

const emails = ["Аккаунт Google", "Сменить аккаунт", "Выйти"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ bgcolor: "#323232", minWidth: 300, pl: 2, pr: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ height: "47px", width: "47px", ml: 2, mt: 2 }}
          />
          <ListItemText
            primary={"Remy Sharp"}
            sx={{ color: "#fff", mt: 2, ml: 3 / 2 }}
          />
        </Box>
        <Divider sx={{ bgcolor: "#fff" }} />
        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton className={classes.hoverButton} sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 23, pr: 1 }}>
                <IoLogoGoogle />
              </ListItemIcon>
              <ListItemText primary="Аккаунт Google" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton className={classes.hoverButton} sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, pr: 1 }}>
                <BiSolidUserAccount />
              </ListItemIcon>
              <ListItemText primary="Сменить аккаунт" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton className={classes.hoverButton} sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 23, pr: 1 }}>
                <MdLogout />
              </ListItemIcon>
              <ListItemText primary="Выйти" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ bgcolor: '#fff' }} />
        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton className={classes.hoverButton} sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 23, pr: 1 }}>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M10 9.35 15 12l-5 2.65ZM12 3a.73.73 0 00-.31.06L4.3 7.28a.79.79 0 00-.3.52v8.4a.79.79 0 00.3.52l7.39 4.22a.83.83 0 00.62 0l7.39-4.22a.79.79 0 00.3-.52V7.8a.79.79 0 00-.3-.52l-7.39-4.22A.73.73 0 0012 3m0-1a1.6 1.6 0 01.8.19l7.4 4.22A1.77 1.77 0 0121 7.8v8.4a1.77 1.77 0 01-.8 1.39l-7.4 4.22a1.78 1.78 0 01-1.6 0l-7.4-4.22A1.77 1.77 0 013 16.2V7.8a1.77 1.77 0 01.8-1.39l7.4-4.22A1.6 1.6 0 0112 2Zm0 4a.42.42 0 00-.17 0l-4.7 2.8a.59.59 0 00-.13.39v5.61a.65.65 0 00.13.37l4.7 2.8A.42.42 0 0012 18a.34.34 0 00.17 0l4.7-2.81a.56.56 0 00.13-.39V9.19a.62.62 0 00-.13-.37L12.17 6A.34.34 0 0012 6m0-1a1.44 1.44 0 01.69.17L17.39 8A1.46 1.46 0 0118 9.19v5.61a1.46 1.46 0 01-.61 1.2l-4.7 2.81A1.44 1.44 0 0112 19a1.4 1.4 0 01-.68-.17L6.62 16A1.47 1.47 0 016 14.8V9.19A1.47 1.47 0 016.62 8l4.7-2.8A1.4 1.4 0 0112 5Z"></path></svg>
              </ListItemIcon>
              <ListItemText primary="Творческая студия YouTube" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton className={classes.hoverButton} sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, pr: 1 }}>
                <BiSolidUserAccount />
              </ListItemIcon>
              <ListItemText primary="Сменить аккаунт" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton className={classes.hoverButton} sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 23, pr: 1 }}>
                <MdLogout />
              </ListItemIcon>
              <ListItemText primary="Выйти" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Dialog>
  );
}

const RightBox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      minWidth={150}
    >
      <Tooltip title="Create">
        <IconButton
          color="inherit"
          sx={{
            // height: '35px',
            // width: '35px',
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <MdOutlineVideoCall fontSize={25} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Notifications">
        <IconButton
          color="inherit"
          sx={{
            // height: '35px',
            // width: '35px',
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <IoMdNotificationsOutline fontSize={25} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Profile">
        <ListItemButton
          sx={{
            borderRadius: 10 / 1,
            maxWidth: 42,
            maxHeight: 42,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClickOpen}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              height: "28px",
              width: "28px",
              position: "center",
            }}
          />
        </ListItemButton>
      </Tooltip>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
};

export default RightBox;

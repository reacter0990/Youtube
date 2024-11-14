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
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import { IoLogoGoogle } from "react-icons/io5";
import { BiSolidUserAccount } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import classes from "../../CSS/main.module.css";
import { SiYoutube } from "react-icons/si";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";
import { FaShieldHalved } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiSolidMessageError } from "react-icons/bi";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { Typography } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

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

  const [isScrollBarFocused, setIsScrollBarFocused] = useState(false);

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ bgcolor: "#323232", minWidth: 370 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pb: 2,
            ml: 1.2,
            mt: 0.5,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ height: "47px", width: "47px" }}
          />
          <Box sx={{ mt: 2, ml: 1.2 }}>
            <ListItemText primary={"Remy Sharp"} sx={{ color: "#fff" }} />
            <Tooltip title={"@remysharp2381"}>
              <ListItemText
                primary={"@remysharp2381"}
                primaryTypographyProps={{ style: { fontSize: 14 } }}
                sx={{ color: "#fff" }}
              />
            </Tooltip>
          </Box>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Tooltip title={"Посмотреть канал"}>
              <ListItemText
                sx={{ color: "#3ea6ff", mt: 2, ml: 6 }}
                primary={"Посмотреть канал"}
                primaryTypographyProps={{ style: { fontSize: 14 } }}
              />
            </Tooltip>
          </Link>
        </Box>
        <Divider sx={{ bgcolor: "#fff" }} />
        <Box
          sx={{
            overflowX: "hidden",
            overflowY: isScrollBarFocused ? "auto" : "hidden",
            maxHeight: "500px",
          }}
          onMouseEnter={() => setIsScrollBarFocused(true)}
          onMouseLeave={() => setIsScrollBarFocused(false)}
        >
          <List sx={{ pt: 0, pl: 1, pr: 1 }}>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <IoLogoGoogle />
                </ListItemIcon>
                <ListItemText primary="Аккаунт Google" sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 24,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <BiSolidUserAccount />
                </ListItemIcon>
                <ListItemText
                  primary="Сменить аккаунт"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <MdLogout />
                </ListItemIcon>
                <ListItemText primary="Выйти" sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider sx={{ bgcolor: "#fff" }} />
          <List sx={{ pt: 0, pl: 1, pr: 1 }}>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <SiYoutube />
                </ListItemIcon>
                <ListItemText
                  primary="Творческая студия YouTube"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 24,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <FaCircleDollarToSlot />
                </ListItemIcon>
                <ListItemText
                  primary="Покупки и платные подписки"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider sx={{ bgcolor: "#fff" }} />
          <List sx={{ pt: 0, pl: 1, pr: 1 }}>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <FaUserShield />
                </ListItemIcon>
                <ListItemText
                  primary="Выши данные на YouTube"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <FaRegMoon />
                </ListItemIcon>
                <ListItemText
                  primary="Тема: как на устройстве"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <LuLanguages />
                </ListItemIcon>
                <ListItemText primary="Язык: Русский" sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <FaShieldHalved />
                </ListItemIcon>
                <ListItemText
                  primary="Безопасный режим: откл."
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <BsGlobe />
                </ListItemIcon>
                <ListItemText
                  primary="Страна: Азербайджан"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <FaRegKeyboard />
                </ListItemIcon>
                <ListItemText
                  primary="Быстрые клавиши"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider sx={{ bgcolor: "#fff" }} />
          <List sx={{ pt: 0, pl: 1, pr: 1 }}>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <IoSettingsOutline />
                </ListItemIcon>
                <ListItemText
                  primary="Быстрые клавиши"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider sx={{ bgcolor: "#fff" }} />
          <List sx={{ pt: 0, pl: 1, pr: 1 }}>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <AiOutlineQuestionCircle />
                </ListItemIcon>
                <ListItemText primary="Справка" sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                className={classes.hoverButton}
                sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 23,
                    pr: 1,
                  }}
                  className={classes.hoverButton}
                >
                  <BiSolidMessageError />
                </ListItemIcon>
                <ListItemText
                  primary="Отправить отзыв"
                  sx={{ color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Dialog>
  );
}

function NotificationsModal({ isOpen }) {
  const list = [
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
  ];

  const [isScrollBarFocused, setIsScrollBarFocused] = useState(false);
  return (
    <>
      {!isOpen ? (
        <Box></Box>
      ) : (
          <Box
            maxWidth={480}
            position={"fixed"}
            top={50}
            minHeight={580}
            width={"100%"}
            zIndex={99}
            right={20}
            bgcolor={"#323232"}
            sx={{ borderRadius: "10px" }}>
            <Box
              maxHeight={580}
              pt={2}
              pl={2}
              pr={1}
              display={"grid"}
              gridTemplateColumns={"auto"}
              rowGap={"10px"}
              sx={{
                overflowX: "hidden",
                overflowY: isScrollBarFocused ? "auto" : "hidden",
              }}
              onMouseEnter={() => setIsScrollBarFocused(true)}
              onMouseLeave={() => setIsScrollBarFocused(false)}
            >
              {list.map((block, index) => {
                return (
                  <Array
                    key={index}
                    index={index}
                    logo={block.logo}
                    text={block.text}
                    description={block.description}
                    image={block.image}
                  />
                );
              })}
            </Box>
          </Box>
      )}
    </>
  );
}

const Array = ({ index, logo, text, description, image }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/content/${index}`}>
      <Box
        height={"auto"}
        width={"100%"}
        display={"flex"}
        alignItems={"start"}
        pt={1}
        pb={1}
        pl={1.2}
        pr={1.2}
        className={classes.hoveredBlock}
        sx={{ borderRadius: 2 }}
      >
        <Avatar
          alt={"Brawl Start"}
          src={logo}
          sx={{ height: "50px", width: "50px" }}
        />
        <Box
          display={"grid"}
          gridTemplateColumns={"auto"}
          rowGap={"2px"}
          pl={2}
          pr={2}
        >
          <Typography
            component={"div"}
            variant={"h5"}
            color={"#fff"}
            fontSize={15}
          >
            {text}
          </Typography>
          <Typography
            component={"div"}
            variant={"h6"}
            color={"#aaa"}
            fontSize={14}
          >
            {description}
          </Typography>
        </Box>
        <img
          style={{ width: "100px", height: "auto", borderRadius: 2 }}
          src={image}
          alt=""
        />
        <IconButton
          className={classes.hoverButton}
          sx={{ color: "#fff", ml: 1 }}
        >
          <BsThreeDotsVertical />
        </IconButton>
      </Box>
    </Link>
  );
};

export { Array };

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
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
          onClick={toggleModalOpen}
        >
          <Badge badgeContent={"+9"} color={"error"}>
            <IoMdNotificationsOutline fontSize={25} />
          </Badge>
        </IconButton>
      </Tooltip>
      <NotificationsModal onClose={handleClose} open={open} isOpen={isModalOpen} />
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

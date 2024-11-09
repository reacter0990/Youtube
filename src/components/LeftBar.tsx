import { useState } from "react";
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
import { BiVideo } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const LeftBar = () => {
  const [isScrollBarFocused, setIsScrollBarFocused] = useState(false);

  const [isFocused_1, setIsFocused_1] = useState(false);
  const [isFocused_2, setIsFocused_2] = useState(false);
  const [isFocused_3, setIsFocused_3] = useState(false);
  const [isFocused_4, setIsFocused_4] = useState(false);
  const [isFocused_5, setIsFocused_5] = useState(false);
  const [isFocused_6, setIsFocused_6] = useState(false);
  const [isFocused_7, setIsFocused_7] = useState(false);
  const [isFocused_8, setIsFocused_8] = useState(false);
  const [isFocused_9, setIsFocused_9] = useState(false);
  const [isFocused_10, setIsFocused_10] = useState(false);
  const [isFocused_11, setIsFocused_11] = useState(false);
  const [isFocused_12, setIsFocused_12] = useState(false);
  const [isFocused_13, setIsFocused_13] = useState(false);
  const [isFocused_14, setIsFocused_14] = useState(false);
  const [isFocused_15, setIsFocused_15] = useState(false);
  const [isFocused_16, setIsFocused_16] = useState(false);
  const [isFocused_17, setIsFocused_17] = useState(false);
  return (
    <Box
      maxWidth={260}
      width={"100%"}
      paddingTop={"54px"}
      maxHeight={741.3}
      height={"auto"}
      sx={{
        overflowX: "hidden",
        overflowY: isScrollBarFocused ? "auto" : "hidden",
        position: "fixed"
      }}
      onMouseEnter={() => setIsScrollBarFocused(true)}
      onMouseLeave={() => setIsScrollBarFocused(false)}
    >
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
              primary="Плейлисты"
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
              <BiVideo color="#fff" fontSize={22} />
            </ListItemIcon>
            <ListItemText
              primary="Ваши видео"
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
            onMouseEnter={() => setIsFocused_6(true)}
            onMouseLeave={() => setIsFocused_6(false)}
            style={{
              backgroundColor: isFocused_6 ? "#212121" : "transparent",
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <FaRegClock color="#fff" fontSize={22} />
            </ListItemIcon>
            <ListItemText
              primary="Смотреть позже"
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
            onMouseEnter={() => setIsFocused_7(true)}
            onMouseLeave={() => setIsFocused_7(false)}
            style={{
              backgroundColor: isFocused_7 ? "#212121" : "transparent",
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <AiOutlineLike color="#fff" fontSize={22} />
            </ListItemIcon>
            <ListItemText
              primary="Понравившиеся"
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
        Подписки
      </Typography>
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
              borderRadius: 3,
              pr: 2,
              pl: 1.5,
              height: 40,
            }}
            onMouseEnter={() => setIsFocused_8(true)}
            onMouseLeave={() => setIsFocused_8(false)}
            style={{
              backgroundColor: isFocused_8 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_9(true)}
            onMouseLeave={() => setIsFocused_9(false)}
            style={{
              backgroundColor: isFocused_9 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_10(true)}
            onMouseLeave={() => setIsFocused_10(false)}
            style={{
              backgroundColor: isFocused_10 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_11(true)}
            onMouseLeave={() => setIsFocused_11(false)}
            style={{
              backgroundColor: isFocused_11 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_12(true)}
            onMouseLeave={() => setIsFocused_12(false)}
            style={{
              backgroundColor: isFocused_12 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_13(true)}
            onMouseLeave={() => setIsFocused_13(false)}
            style={{
              backgroundColor: isFocused_13 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_14(true)}
            onMouseLeave={() => setIsFocused_14(false)}
            style={{
              backgroundColor: isFocused_14 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_15(true)}
            onMouseLeave={() => setIsFocused_15(false)}
            style={{
              backgroundColor: isFocused_15 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_16(true)}
            onMouseLeave={() => setIsFocused_16(false)}
            style={{
              backgroundColor: isFocused_16 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
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
            onMouseEnter={() => setIsFocused_17(true)}
            onMouseLeave={() => setIsFocused_17(false)}
            style={{
              backgroundColor: isFocused_17 ? "#212121" : "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "30px",
                height: "auto",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/ytc/AIdro_lqcW7QiirwWk-U6Av4djDjf0TGNWFdg2PCBFRIIXDN878=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Ulbi TV"
              color="white"
              primaryTypographyProps={{ style: { fontSize: 14 } }}
              sx={{
                pl: 2.9,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftBar;

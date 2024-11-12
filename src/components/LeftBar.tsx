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
  AccordionDetails,
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
import { FaArrowTrendUp } from "react-icons/fa6";
import classes from "../CSS/main.module.css";
import { LuMusic4 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CgGames } from "react-icons/cg";
import { GiTrophyCup } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { BiSolidMessageError } from "react-icons/bi";
import { Link } from "react-router-dom";

const LeftBar: React.FC = ({}) => {
  const [isScrollBarFocused, setIsScrollBarFocused] = useState(false);

  const [isClick, setIsClick] = useState(false);

  const handleClickFunction = () => {
    setIsClick(!isClick);
  };
  return (
    <Box
      maxWidth={260}
      width={"100%"}
      top={55}
      maxHeight={755}
      height={"auto"}
      paddingBottom={"70px"}
      sx={{
        overflowX: "hidden",
        overflowY: isScrollBarFocused ? "auto" : "hidden",
        position: "fixed",
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
            className={classes.hoveredLink}
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
            className={classes.hoveredLink}
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
            className={classes.hoveredLink}
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
            className={classes.hoveredLink}
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
            className={classes.hoveredLink}
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
            className={classes.hoveredLink}
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
            className={classes.hoveredLink}
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
          display: "grid",
          gridTemplateColumns: "auto",
          rowGap: "3px",
          pl: 2,
          pr: 2,
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
            className={classes.hoveredLink}
          >
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Brawl Stars"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
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
            className={classes.hoveredLink}
          >
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Brawl Stars"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
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
            className={classes.hoveredLink}
          >
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Brawl Stars"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
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
            className={classes.hoveredLink}
          >
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Brawl Stars"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
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
            className={classes.hoveredLink}
          >
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Brawl Stars"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
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
            className={classes.hoveredLink}
          >
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Brawl Stars"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
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
            className={classes.hoveredLink}
          >
            <div
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                overflow: "hidden",
                borderRadius: "100%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <ListItemText
              primary="Brawl Stars"
              primaryTypographyProps={{
                style: { fontSize: 14, color: "#fff" },
              }}
              sx={{
                pl: 2.9,
              }}
            />
          </ListItemButton>
        </ListItem>
        {isClick && (
          <>
            <ListItem sx={{ p: 0 }}>
              <ListItemButton
                sx={{
                  borderRadius: 3,
                  pr: 2,
                  pl: 1.5,
                  height: 40,
                }}
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
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
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
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
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
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
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
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
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
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
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
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
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
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
                className={classes.hoveredLink}
              >
                <div
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src="https://yt3.ggpht.com/zoHlZ_RotyRUC4aict9E5w96TP1hcDs4SI5Uw6qN3GHj6IUkzVeStInXYbCkVNAmJuU4GqmF=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <ListItemText
                  primary="Brawl Stars"
                  primaryTypographyProps={{
                    style: { fontSize: 14, color: "#fff" },
                  }}
                  sx={{
                    pl: 2.9,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </>
        )}
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            onClick={handleClickFunction}
            sx={{
              maxWidth: 200,
              borderRadius: 2,
              pt: 1.4,
              pb: 1.4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={classes.hoveredLink}
          >
            {isClick ? (
              <IoIosArrowUp style={{ color: "#fff" }} />
            ) : (
              <IoIosArrowDown style={{ color: "#fff" }} />
            )}
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
        Навигатор
      </Typography>
      <List
        sx={{
          pt: 2,
          pl: 2,
          pr: 2,
          pb: 1,
          // height: "100%",
          display: "grid",
          gridTemplateColumns: "auto",
          rowGap: "3px",
        }}
      >
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <FaArrowTrendUp />
            </ListItemIcon>
            <ListItemText primary="В тренде" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <LuMusic4 />
            </ListItemIcon>
            <ListItemText primary="Музыка" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <CgGames />
            </ListItemIcon>
            <ListItemText primary="Видеоигры" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <GiTrophyCup />
            </ListItemIcon>
            <ListItemText primary="Спорт" />
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
        Дополнительно
      </Typography>
      <List
        sx={{
          pl: 2,
          pr: 2,
          pb: 1,
          display: "grid",
          gridTemplateColumns: "auto",
          rowGap: "3px",
        }}
      >
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <IoSettingsOutline />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <FaRegFlag />
            </ListItemIcon>
            <ListItemText primary="Жалобы" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <GoQuestion />
            </ListItemIcon>
            <ListItemText primary="Справка" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemButton
            className={classes.hoveredLink}
            sx={{ borderRadius: 3, pr: 2, pl: 1.5, height: 40, maxWidth: 200 }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 22 }}>
              <BiSolidMessageError />
            </ListItemIcon>
            <ListItemText primary="Отправить отзыв" className="!text-[10px]" />
          </ListItemButton>
        </ListItem>
        <Divider
          component="li"
          sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 2 }}
        />
      </List>
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "auto",
          rowGap: "20px",
          pb: 3,
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={"https://www.youtube.com/howyoutubeworks/policies/copyright/"}
        >
          <Typography
            component={"div"}
            variant="h6"
            color="#aaa"
            pl={4}
            fontSize={14}
            maxWidth={235}
          >
            О сервисе Прессе Авторские права Связаться с нами Авторам
            Рекламодателям Разработчикам
          </Typography>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={
            "https://www.youtube.com/howyoutubeworks/policies/community-guidelines/"
          }
        >
          <Typography
            component={"div"}
            variant="h6"
            color="#aaa"
            pl={4}
            fontSize={14}
            maxWidth={235}
          >
            Условия использования Конфиденциальность Правила и безопасность Как
            работает YouTube Тестирование новых функций
          </Typography>
        </Link>
        <Typography
          component={"div"}
          variant="h6"
          color="#717171"
          pl={4}
          fontSize={13}
        >
          © 2024 Google LLC
        </Typography>
      </List>
    </Box>
  );
};

export default LeftBar;

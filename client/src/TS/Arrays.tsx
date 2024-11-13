import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import classes from "../css/Menu.module.css";
import { HomeSVG, ShortSVG, FollowSVG } from "../SVG/SVG";

export const ArrayOne: Array<JSX.Element> = [
  <List sx={{ pt: 1.5, pl: 2, pr: 2, pb: 0 }}>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          bgcolor: "#212121",
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <HomeSVG />
        </ListItemIcon>
        <ListItemText
          primary="Главная"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <ShortSVG />
        </ListItemIcon>
        <ListItemText
          primary="Shorts"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <FollowSVG />
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
      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 1.2, mb: 2 }}
    />
  </List>,
];

export const ArrayTwo: Array<JSX.Element> = [
  <List sx={{ pl: 2, pr: 2 }}>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          // bgcolor: '#212121',
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "24px",
              height: "24px",
            }}>
            <path
              clipRule="evenodd"
              d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="История"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()} className={classes.link}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "24px",
              height: "24px",
            }}>
            <path
              clipRule="evenodd"
              d="M3.75 5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 5 20.25 5H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 9 20.25 9H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5Zm8.5 4c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5Zm3.498-3.572c-.333-.191-.748.05-.748.434v6.276c0 .384.415.625.748.434L22 17l-6.252-3.572Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Плейлисты"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "24px",
              height: "24px",
            }}>
            <path
              clipRule="evenodd"
              d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Ваши видео"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "24px",
              height: "24px",
            }}>
            <path
              clipRule="evenodd"
              d="M20.5 12c0 4.694-3.806 8.5-8.5 8.5S3.5 16.694 3.5 12 7.306 3.5 12 3.5s8.5 3.806 8.5 8.5Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.25-5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.375l.3.225 4 3c.331.248.802.181 1.05-.15.248-.331.181-.801-.15-1.05l-3.7-2.775V7Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Смотреть позже"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "24px",
              height: "24px",
            }}>
            <path
              clipRule="evenodd"
              d="M14.813 5.018 14.41 6.5 14 8h5.192c.826 0 1.609.376 2.125 1.022.711.888.794 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H5c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h2v.282c0-.834.26-1.647.745-2.325L12 1l1.1.472c1.376.59 2.107 2.103 1.713 3.546ZM7 10.5H5c-.276 0-.5.224-.5.5v8c0 .276.224.5.5.5h2v-9Zm10.5 9h-9V9.282c0-.521.163-1.03.466-1.453l3.553-4.975c.682.298 1.043 1.051.847 1.77l-.813 2.981c-.123.451-.029.934.255 1.305.284.372.725.59 1.192.59h5.192c.37 0 .722.169.954.459.32.399.357.954.094 1.393l-.526.876c-.241.402-.28.894-.107 1.33l.165.412c.324.81.203 1.73-.32 2.428l-.152.202c-.195.26-.3.575-.3.9v.5c0 .828-.672 1.5-1.5 1.5Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Понравившиеся"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "24px",
              height: "24px",
            }}>
            <path
              clipRule="evenodd"
              d="M17.53 11.53c.293-.293.293-.767 0-1.06-.293-.293-.767-.293-1.06 0l-3.72 3.72V3c0-.414-.336-.75-.75-.75s-.75.336-.75.75v11.19l-3.72-3.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5 5 .53.53.53-.53 5-5Zm1.72 8.97c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.75c-.414 0-.75.336-.75.75s.336.75.75.75h14.5Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Скаченные"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "24px",
              height: "24px",
            }}>
            <path
              clipRule="evenodd"
              d="m8.042 9.456-.716.08c-.732.08-1.486-.16-2.043-.718-.977-.976-.977-2.559 0-3.535.976-.977 2.559-.977 3.535 0 .558.557.798 1.312.717 2.044l-.079.715.51.51 10.13 10.13c-.97.643-2.291.537-3.146-.318l-4.951-4.951-1.061 1.06 4.951 4.952c1.442 1.442 3.712 1.553 5.282.331.13-.1.255-.212.375-.331l.707-.707-1.06-1.061L15.534 12l5.657-5.657 1.06-1.06-.706-.708c-.12-.12-.245-.23-.376-.331-1.569-1.222-3.839-1.111-5.281.331L13.06 7.404l1.061 1.06 2.829-2.828c.855-.855 2.175-.961 3.146-.318l-4.56 4.56 1.06 1.061L15.536 12l-4.51-4.51c.128-1.164-.254-2.375-1.147-3.268-1.562-1.562-4.095-1.562-5.657 0-1.562 1.562-1.562 4.095 0 5.657.893.893 2.104 1.276 3.269 1.147l2.033 2.033 1.06-1.06-2.033-2.033-.509-.51Zm-.285-3.113c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.024 0 1.415.39.39 1.024.39 1.414 0 .39-.391.39-1.024 0-1.415Zm-.43 8.122.715.079.51-.51.973-.973L8.465 12l-.975.974c-1.165-.128-2.375.254-3.268 1.147-1.562 1.562-1.562 4.095 0 5.657 1.562 1.562 4.094 1.562 5.657 0 .893-.893 1.275-2.104 1.147-3.269l.974-.973-1.06-1.061-.975.974-.509.509.079.716c.08.732-.16 1.486-.717 2.044-.976.976-2.56.976-3.536 0-.976-.977-.976-2.56 0-3.536.558-.558 1.312-.798 2.044-.717Zm-.984 3.192c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Ваши клипы"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <Divider
      component="li"
      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 1 }}
    />
  </List>,
];

export const ArrayThree: Array<JSX.Element> = [
  <List sx={{ pl: 2, pr: 2 }}>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <Avatar
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.3)",
            height: "24px",
            width: "24px",
            mr: 3,
          }}
        />
        <ListItemText
          primary="Laf TV"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
        <ListItemIcon sx={{ maxWidth: "15px", minWidth: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f03"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "16px",
              height: "15px",
            }}>
            <path d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"></path>
          </svg>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <Avatar
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.3)",
            height: "24px",
            width: "24px",
            mr: 3,
          }}
        />
        <ListItemText
          primary="Laf TV"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
        <ListItemIcon sx={{ maxWidth: "15px", minWidth: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f03"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "16px",
              height: "15px",
            }}>
            <path d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"></path>
          </svg>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <Avatar
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.3)",
            height: "24px",
            width: "24px",
            mr: 3,
          }}
        />
        <ListItemText
          primary="Laf TV"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
        <ListItemIcon sx={{ maxWidth: "15px", minWidth: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f03"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
              width: "16px",
              height: "15px",
            }}>
            <path d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"></path>
          </svg>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
    <Divider
      component="li"
      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 1 }}
    />
  </List>,
];

export const ArrayFour: Array<JSX.Element> = [
  <List sx={{ pl: 2, pr: 2 }}>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="m14 2-1.5.886-5.195 3.07C4.637 7.533 3 10.401 3 13.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5V1l-1.5 1-3 2L14 5V2ZM8.068 7.248l4.432-2.62v3.175l2.332-1.555L18.5 3.803V13.5c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-2.568 1.357-4.946 3.568-6.252ZM9 15c0-1.226.693-2.346 1.789-2.894L15 10v5c0 1.657-1.343 3-3 3s-3-1.343-3-3Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="В тренде"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="M19 3c0-.271-.146-.521-.383-.654-.237-.133-.527-.127-.758.014l-9 5.5c-.223.136-.359.379-.359.64v7.901C8.059 16.146 7.546 16 7 16c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3v-7.08l7.5-4.583v6.064c-.441-.255-.954-.401-1.5-.401-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3Zm-1.5 13c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm-9 3c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm9-13.42L10 10.162V8.92l7.5-4.584V5.58Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Музыка"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="m12 7.75-.772-.464-4.186-2.511L2.5 7.803v6.307L12 19.29l9.5-5.181V7.803l-4.542-3.028-4.186 2.511L12 7.75ZM12 6 7.814 3.488c-.497-.298-1.122-.283-1.604.039L1.668 6.555C1.251 6.833 1 7.3 1 7.803v6.307c0 .548.3 1.054.782 1.316l9.5 5.182c.447.244.989.244 1.436 0l9.5-5.182c.482-.262.782-.768.782-1.316V7.803c0-.502-.25-.97-.668-1.248L17.79 3.527c-.482-.322-1.107-.337-1.604-.039L12 6Zm3.5 6.25c0 .69-.56 1.25-1.25 1.25S13 12.94 13 12.25 13.56 11 14.25 11s1.25.56 1.25 1.25ZM7 8c-.414 0-.75.336-.75.75v1.5h-1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.5v1.5c0 .414.336.75.75.75s.75-.336.75-.75v-1.5h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.5v-1.5C7.75 8.336 7.414 8 7 8Zm10.75 3c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Видеоигры"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="M6.5 3.5h11V9c0 3.038-2.462 5.5-5.5 5.5S6.5 12.038 6.5 9V3.5ZM5 3.5C5 2.672 5.672 2 6.5 2h11c.828 0 1.5.672 1.5 1.5V4h2c.552 0 1 .448 1 1v3c0 2.493-1.825 4.56-4.212 4.938-1.082 1.588-2.8 2.707-4.788 2.991V17.5h1.5c.828 0 1.5.672 1.5 1.5v3H8v-3c0-.828.672-1.5 1.5-1.5H11v-1.57c-1.987-.285-3.706-1.404-4.788-2.992C3.825 12.56 2 10.493 2 8V5c0-.552.448-1 1-1h2v-.5Zm0 1.75H3.25V8c0 1.508.89 2.808 2.174 3.403C5.15 10.654 5 9.845 5 9V5.25Zm13.576 6.153C19.86 10.808 20.75 9.508 20.75 8V5.25H19V9c0 .844-.15 1.654-.424 2.403ZM9.5 20.5V19h5v1.5h-5Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Спорт"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <Divider
      component="li"
      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 1 }}
    />
  </List>,
];

export const ArrayFive: Array<JSX.Element> = [
  <List sx={{ pl: 2, pr: 2 }}>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            xml:space="preserve"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <g>
              <path
                fill="#FF0033"
                d="M21.58,7.19c-0.23-0.86-0.91-1.54-1.77-1.77C18.25,5,12,5,12,5S5.75,5,4.19,5.42   C3.33,5.65,2.65,6.33,2.42,7.19C2,8.75,2,12,2,12s0,3.25,0.42,4.81c0.23,0.86,0.91,1.54,1.77,1.77C5.75,19,12,19,12,19   s6.25,0,7.81-0.42c0.86-0.23,1.54-0.91,1.77-1.77C22,15.25,22,12,22,12S22,8.75,21.58,7.19z"></path>
              <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
            </g>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Youtube Premium"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            xml:space="preserve"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <g>
              <path
                fill="#FF0033"
                d="M11.13,1.21c0.48-0.28,1.26-0.28,1.74,0l8.01,4.64c0.48,0.28,0.87,0.97,0.87,1.53v9.24   c0,0.56-0.39,1.25-0.87,1.53l-8.01,4.64c-0.48,0.28-1.26,0.28-1.74,0l-8.01-4.64c-0.48-0.28-0.87-0.97-0.87-1.53V7.38   c0-0.56,0.39-1.25,0.87-1.53L11.13,1.21z"></path>
              <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
              <path
                fill="#FFFFFF"
                d="M12,6c0.11,0,0.19,0.03,0.21,0.04l4.89,2.82c0.05,0.03,0.14,0.2,0.14,0.37v5.67c0,0.17-0.09,0.34-0.14,0.37   l-4.9,2.83c-0.03,0.01-0.1,0.04-0.21,0.04c-0.11,0-0.19-0.03-0.21-0.04l-4.9-2.83c-0.05-0.03-0.15-0.2-0.15-0.37V9.24   c0-0.17,0.1-0.34,0.14-0.37l4.9-2.83C11.82,6.03,11.89,6,12,6 M12,5c-0.25,0-0.51,0.06-0.71,0.18L6.39,8   C5.99,8.23,5.75,8.77,5.75,9.24v5.67c0,0.47,0.24,1,0.64,1.24l4.9,2.83c0.2,0.12,0.46,0.18,0.71,0.18c0.25,0,0.51-0.06,0.71-0.18   l4.9-2.83c0.41-0.24,0.64-0.77,0.64-1.24V9.24c0-0.47-0.23-1-0.64-1.24l-4.9-2.82C12.51,5.06,12.26,5,12,5L12,5z"></path>
            </g>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Творческая студия"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            xml:space="preserve"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <g>
              <circle
                id="XMLID_4814__yt113"
                fill="#FF0033"
                cx="12"
                cy="12"
                r="11"></circle>
              <path
                fill="#FFFFFF"
                d="M12,6.25c3.17,0,5.75,2.58,5.75,5.75s-2.58,5.75-5.75,5.75S6.25,15.17,6.25,12S8.83,6.25,12,6.25 M12,5.25   c-3.73,0-6.75,3.02-6.75,6.75s3.02,6.75,6.75,6.75s6.75-3.02,6.75-6.75S15.73,5.25,12,5.25L12,5.25z"></path>
              <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
            </g>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="YouTube Music"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            xml:space="preserve"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <g>
              <g>
                <path
                  fill="#FF0033"
                  d="M22.64,13.2c-0.01-1.04-0.62-5.98-0.9-6.74c-0.19-0.5-0.58-1.4-1.31-1.95c-0.94-0.7-1.7-0.83-2.68-0.85    C17.06,3.64,6.12,5.03,4.79,5.51C3.8,5.88,3.03,6.35,2.42,6.95c-0.99,0.98-1.18,1.93-1.02,3.6c0.14,1.52,0.85,6.55,1.21,7.59    c0.39,1.15,1.11,2.03,2.3,2.16c3.62,0.39,4.48-1.6,12.9-1.58c2.55,0.01,3.82-1.11,4.35-2.08C22.77,15.49,22.65,13.99,22.64,13.2z"></path>
                <path
                  fill="#212121"
                  d="M17.47,4.04C17.47,4.04,17.48,4.04,17.47,4.04c0.94,0.02,1.67,0.14,2.56,0.81    c0.7,0.53,1.08,1.39,1.25,1.86c0.28,0.73,0.85,5.44,0.86,6.43c0.01,0.76,0.12,2.19-0.47,3.28c-0.5,0.92-1.71,1.98-4.13,1.98    c-0.01,0-0.01,0-0.02,0c-0.04,0-0.07,0-0.11,0c-7.23,0-8.55,1.56-11.33,1.56c-0.27,0-0.56-0.02-0.87-0.05    c-1.13-0.12-1.82-0.96-2.19-2.06c-0.34-0.99-1.01-5.79-1.15-7.24c-0.15-1.6,0.03-2.51,0.98-3.44c0.58-0.57,1.32-1.02,2.27-1.37    C6.38,5.35,16.73,4.04,17.47,4.04 M17.47,3.2c-0.47,0-3.53,0.37-6.09,0.72C8.82,4.27,5.6,4.75,4.84,5.03    c-1.06,0.39-1.9,0.9-2.56,1.56C1.05,7.8,0.9,9.06,1.05,10.7c0.12,1.27,0.8,6.28,1.19,7.43c0.53,1.55,1.55,2.48,2.89,2.62    c0.33,0.04,0.64,0.05,0.96,0.05c1.17,0,2.1-0.25,3.18-0.54c1.69-0.45,3.8-1.02,8.15-1.02l0.11,0l0.02,0    c1.07,0,3.68-0.24,4.86-2.42c0.63-1.17,0.6-2.59,0.58-3.43c0-0.09,0-0.18-0.01-0.26c-0.01-1.01-0.59-5.85-0.92-6.72    c-0.38-1-0.89-1.75-1.53-2.23c-1.05-0.79-1.94-0.96-3.04-0.98l-0.01,0L17.47,3.2L17.47,3.2z"></path>
              </g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M15.28,11.85c-0.03,0.02-0.05,0.03-0.08,0.05c-0.21,0.14-0.42,0.28-0.63,0.43    c-0.49,0.33-3.33,2.26-3.33,2.26c-0.24,0.18-0.7,0.47-0.87,0.38c-0.17-0.09-0.23-0.72-0.27-1.02l-0.01-0.07    c-0.05-0.36-0.46-3.83-0.51-4.21C9.56,9.56,9.5,9.17,9.62,9.08c0.13-0.1,0.47,0.01,0.58,0.05c0.66,0.21,3.93,1.35,4.95,1.86    c0.03,0.02,0.06,0.03,0.1,0.04c0.15,0.06,0.35,0.15,0.35,0.39C15.6,11.65,15.42,11.76,15.28,11.85z"></path>
                <path
                  fill="#212121"
                  d="M10.04,9.59c1.14,0.38,3.77,1.32,5.01,1.87c-0.15,0.1-0.3,0.2-0.45,0.3c-0.58,0.39-3.94,2.68-3.94,2.68    l-0.02,0.01l-0.02,0.01c0,0,0,0,0,0c0-0.03-0.01-0.05-0.01-0.07l-0.02-0.13l-0.01-0.08c-0.04-0.31-0.31-2.58-0.48-3.94    C10.08,9.98,10.06,9.76,10.04,9.59 M9.4,8.56c-0.07,0-0.14,0.01-0.18,0.05c-0.15,0.11-0.07,0.58-0.05,0.7    c0.05,0.45,0.54,4.56,0.6,4.99l0.01,0.08c0.05,0.36,0.12,1.1,0.33,1.21c0.03,0.01,0.06,0.02,0.1,0.02c0.25,0,0.68-0.28,0.93-0.47    c0,0,3.36-2.29,3.94-2.68c0.25-0.17,0.5-0.34,0.75-0.51c0.03-0.02,0.06-0.04,0.1-0.06c0.17-0.1,0.38-0.23,0.38-0.5    c-0.01-0.29-0.24-0.39-0.41-0.46c-0.04-0.02-0.08-0.03-0.11-0.05c-1.21-0.61-5.09-1.96-5.87-2.21C9.8,8.63,9.58,8.56,9.4,8.56    L9.4,8.56z"></path>
              </g>
            </g>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="YouTube детям"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <Divider
      component="li"
      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 1 }}
    />
  </List>,
];

export const ArraySix: Array<JSX.Element> = [
  <List sx={{ pl: 2, pr: 2 }}>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="m14.302 6.457-.668-.278L12.87 3.5h-1.737l-.766 2.68-.668.277c-.482.2-.934.463-1.344.778l-.575.44-2.706-.677-.868 1.504 1.938 2.003-.093.716c-.033.255-.05.514-.05.779 0 .264.017.524.05.779l.093.716-1.938 2.003.868 1.504 2.706-.677.575.44c.41.315.862.577 1.344.778l.668.278.766 2.679h1.737l.765-2.68.668-.277c.483-.2.934-.463 1.345-.778l.574-.44 2.706.677.869-1.504-1.938-2.003.092-.716c.033-.255.05-.514.05-.779 0-.264-.017-.524-.05-.779l-.092-.716 1.938-2.003-.869-1.504-2.706.677-.574-.44c-.41-.315-.862-.577-1.345-.778Zm4.436.214Zm-3.86-1.6-.67-2.346c-.123-.429-.516-.725-.962-.725h-2.492c-.446 0-.838.296-.961.725l-.67 2.347c-.605.251-1.17.58-1.682.972l-2.37-.593c-.433-.108-.885.084-1.108.47L2.717 8.08c-.223.386-.163.874.147 1.195l1.698 1.755c-.04.318-.062.642-.062.971 0 .329.021.653.062.97l-1.698 1.756c-.31.32-.37.809-.147 1.195l1.246 2.158c.223.386.675.578 1.109.47l2.369-.593c.512.393 1.077.72 1.681.972l.67 2.347c.124.429.516.725.962.725h2.492c.446 0 .839-.296.961-.725l.67-2.347c.605-.251 1.17-.58 1.682-.972l2.37.593c.433.108.885-.084 1.109-.47l1.245-2.158c.223-.386.163-.874-.147-1.195l-1.698-1.755c.04-.318.062-.642.062-.971 0-.329-.021-.653-.062-.97l1.698-1.756c.31-.32.37-.809.147-1.195L20.038 5.92c-.224-.386-.676-.578-1.11-.47l-2.369.593c-.512-.393-1.077-.72-1.681-.972ZM15.5 12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM14 12c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Настройки"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="M4.75 3H4v18.25c0 .414.336.75.75.75s.75-.336.75-.75V14H11l.585 1.17c.254.509.774.83 1.342.83H18.5c.828 0 1.5-.672 1.5-1.5v-8c0-.828-.672-1.5-1.5-1.5H13l-.585-1.17C12.16 3.32 11.64 3 11.073 3H4.75Zm.75 9.5h6.427l.415.83.585 1.17H18.5v-8h-6.427l-.415-.83-.585-1.17H5.5v8Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Жалоба"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="M3.5 12c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5S3.5 7.306 3.5 12ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm2.245 7.505v-.003l-.003-.045c-.004-.044-.012-.114-.03-.2-.034-.174-.103-.4-.234-.619-.234-.39-.734-.883-1.978-.883s-1.744.494-1.978.883c-.131.22-.2.445-.235.62-.017.085-.025.155-.029.2l-.003.044v.004c-.004.415-.34.749-.755.749-.417 0-.755-.338-.755-.755H9h-.755v-.022l.001-.036.008-.114c.008-.092.023-.218.053-.367.058-.294.177-.694.42-1.1.517-.86 1.517-1.616 3.273-1.616 1.756 0 2.756.756 3.272 1.617.244.405.363.805.421 1.1.03.148.046.274.053.366l.008.114v.036l.001.013v.008L15 9.5h.755c0 .799-.249 1.397-.676 1.847-.374.395-.853.634-1.202.808l-.04.02c-.398.2-.646.333-.82.516-.136.143-.262.358-.262.809 0 .417-.338.755-.755.755s-.755-.338-.755-.755c0-.799.249-1.397.676-1.847.374-.395.853-.634 1.202-.808l.04-.02c.398-.2.646-.333.82-.516.135-.143.261-.356.262-.804ZM12 18.25c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Справка"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem sx={{ p: 0 }} key={uuidv4()}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          pr: 2,
          pl: 1.5,
          height: 40,
        }}>
        <ListItemIcon sx={{ minWidth: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            style={{
              pointerEvents: "none",
              display: "inherit",
            }}>
            <path
              clipRule="evenodd"
              d="M6.379 17.5H19c.276 0 .5-.224.5-.5V5c0-.276-.224-.5-.5-.5H5c-.276 0-.5.224-.5.5v14.379l1.44-1.44.439-.439Zm-1.879 4-.033.033-.26.26-.353.353c-.315.315-.854.092-.854-.353V5c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H7l-2.5 2.5ZM12 6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1Zm0 9.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z"
              fillRule="evenodd"></path>
          </svg>
        </ListItemIcon>
        <ListItemText
          primary="Отправить видео"
          color="white"
          primaryTypographyProps={{ style: { fontSize: 14 } }}
        />
      </ListItemButton>
    </ListItem>
    <Divider
      component="li"
      sx={{ bgcolor: "rgba(255, 255, 255, 0.3)", mt: 2, mb: 1 }}
    />
  </List>,
];

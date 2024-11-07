import { MdOutlineVideoCall } from "react-icons/md";
import { Box, IconButton, Avatar } from "@mui/material";
import { IoMdNotificationsOutline } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";

const RightBox = () => {
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
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ height: "28px", width: "28px", ml: 1 }}
      />
    </Box>
  );
};

export default RightBox;

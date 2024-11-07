import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const CenterBox = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box
      flexGrow={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box height={40} maxHeight={40} display={"flex"} alignItems={"center"}>
        <Box
          height={40}
          maxHeight={40}
          display={"flex"}
          alignItems={"center"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            appearance: "none",
            height: 40,
            maxHeight: 40,
            width: isFocused ? "575px" : "536px",
            paddingLeft: 15,
            boxShadow: "none",
            overflow: "hidden",
            backgroundColor: "#000",
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            border: "1.26px solid rgba(66, 66, 66, .8)",
            borderColor: isFocused ? "#0091ea" : "rgba(66, 66, 66, .8)",
            transition: "allow-discrete",
          }}
        >
          <CiSearch
            fontSize={25}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              display: isFocused ? "block" : "none",
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              background: "none",
              border: "none",
              outline: "none",
              paddingLeft: isFocused ? "8px" : "0px",
              width: "100%",
              fontSize: "15px",
            }}
          />
        </Box>
        <Tooltip title="Enter your request">
          <button
            style={{
              width: 68,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.14)",
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
              border: "1.27px solid rgba(66, 66, 66, .8)",
              cursor: "pointer",
            }}
          >
            <CiSearch fontSize={25} />
          </button>
        </Tooltip>
        <Tooltip title="Voice search">
          <IconButton
            color="inherit"
            sx={{
              ml: 2,
              background: "#212121",
              height: "40px",
              width: "40px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <FaMicrophone fontSize={20} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default CenterBox;

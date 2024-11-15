import { Box } from "@mui/material";
const ThemeBlur = () => {
  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgcolor={"rgba(0,0,0,.1)"}
      sx={{ backdropFilter: "blur(5px)" }}>
      Blur
    </Box>
  );
};

export default ThemeBlur;

import { Box } from "@mui/material"
import Main_Block from "../Pages_Components/Home_page_components/Main_Block";

const Home = ({ isOpen }) => {
  return (
    <Box className="max-w-[1536px] mx-auto">
      <Main_Block isOpen={isOpen}/>
    </Box>
  );
};

export default Home;

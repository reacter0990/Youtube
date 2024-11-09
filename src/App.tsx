import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
// import ThemeBlur from "./components/ThemeBlur";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftBar from "./components/LeftBar";

function App() {
  return (
    <Box flexGrow={1}>
      <Router>
        <Navbar />
        <LeftBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;

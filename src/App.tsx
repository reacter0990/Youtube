import { useState } from 'react';
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
// import ThemeBlur from "./components/ThemeBlur";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import LeftBar from "./components/LeftBar";

function App() {
  const [isLeftBarOpen, setLeftBarOpen] = useState(false);

  const toggleLeftBar = () => {
    setLeftBarOpen(!isLeftBarOpen);
    console.log(isLeftBarOpen)
  };

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <Box flexGrow={1}>
      <Router>
        <Navbar toggleModalOpen={toggleModalOpen} toggleLeftBar={toggleLeftBar} />
        <BottomBar />
        <LeftBar isOpen={isLeftBarOpen} />
        <Routes>
          <Route path="/" element={<Home isOpen={isLeftBarOpen} />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;

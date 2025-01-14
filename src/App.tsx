import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Home from "./components/Home/Home";
import HomeDesk from "./components/HomeDesk/HomeDesk";
import RikuPage from "./components/Riku/RikuPage";

import "./global-styles/index.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-desk" element={<HomeDesk />} />
          <Route path="/riku" element={<RikuPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Context from "./Context/Context";
import { ThemeProvider } from "@mui/material/styles";
import { React, useContext } from "react";

import Home from "./Pages/Home";
import View from "./Pages/View"
import CreateIntro from "./Pages/CreateIntro"
import CreateProcess from "./Pages/CreateProcess"
import Gallery from "./Pages/Gallery"
import SpeeedDial from "./Components/SpeeedDial/SpeeedDial";
import NavBar from "./Components/NavBar/NavBar";

/* 
Notes:
Future=> look into importing speeedial under an alies
 */


function App() {
  const context = useContext(Context);
  const { darkModeTheme } = context;

  return (
    <>
      <div className="App">
        <ThemeProvider theme={darkModeTheme}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createintro" element={<CreateIntro />} />
            <Route path="/createprocess" element={<CreateProcess />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
}

/* 
Following tutorial from:
https://reactrouter.com/docs/en/v6/getting-started/tutorial
Not using all points. Keeping it easy breezy */

export default App;

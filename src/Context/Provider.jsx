import { createTheme } from "@mui/material";
import { React, useState } from "react";

import Context from "./Context";



/* Pallettes */
/* 
-Surfaces                     (Card bodys / navBar)
-Accents                      (Primaraly cta text / current page)
-Backgrounds Self Explanatory ( page backgrounds)
-Text                         (BodyText)
*/

//Notes:
/* When working with shades in mui.. you cannot use half values such as [ 250] or [470]... */

function Provider(props) {
    // FollowingBlock is responsible for mui themeing
    const [Mode, setMode] = useState("light");

    const getDesignTokens = (Mode) => ({
        palette: {
            Mode,

            text: {
                ...(Mode === "light"
                    ? {
                        primary: "#343a40",
                        emphasis: "#7D5BA6",
                        pagename: "#E3B505"
                    }
                    : {
                        primary: "#ced4da",
                        emphasis: "#8A33F2",
                        pagename: "#DEB841"
                    })
            },
            btns: {
                ...(Mode === "light"
                    ? {
                        minus: "#BA1B1D",
                        plus: " #00A878",
                        reset: "#001D4A"
                    }
                    : {
                        minus: "#F24333",
                        plus: "#4FB286",
                        reset: "#006992"
                    })
            },

            surfaces: {
                ...(Mode === "light"
                    ? {
                        primary: "#ced4da",
                        main: "#212D40"
                    }
                    : {
                        primary: "#343a40",
                        main: "#11151C"
                    })
            }
        }
    });

    const darkModeTheme = createTheme(getDesignTokens(Mode));

    //Following block responsible for slideshow mechanics
    const [count, setCount] = useState(0)
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    return (
        <>
            <Context.Provider
                value={{ Mode, setMode, darkModeTheme, count, setCount, values }}
            >
                {props.children}
            </Context.Provider>
        </>
    );
}

export default Provider;

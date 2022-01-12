import { useContext, React } from "react";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";

import { DarkMode, LightMode } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Context from "../../Context/Context";


const actions = [
    { icon: <InfoIcon />, name: "About", to: "/about" },
    { icon: <HomeIcon />, name: "Home", to: "/" },

];

function SpeeedDial() {
    const context = useContext(Context);
    const { Mode, setMode } = context;

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    //import context

    return (
        <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
            <SpeedDial
                direction="left"
                ariaLabel="SpeedDial basic example"
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    ".MuiSpeedDial-fab:hover": {
                        color: "red",
                        bgcolor: "surfaces.primary"
                    },
                    ".MuiSpeedDial-fab": {
                        color: "text.primary",
                        bgcolor: "surfaces.primary"
                    }
                }}
                icon={<SegmentIcon />}
            >
                <SpeedDialAction
                    onClick={toggleColorMode}
                    icon={Mode === "light" ? <LightMode /> : <DarkMode />}
                    tooltipTitle={Mode === "light" ? "Dark Mode" : "Light Mode"}
                    tooltipPlacement="bottom"
                    sx={{
                        color: "text.primary",
                        backgroundColor: "surfaces.primary",

                        "&:hover": {
                            color: "text.primary",
                            backgroundColor: "surfaces.primary"
                        }
                    }}
                />
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipPlacement="bottom"
                        to={action.to}
                        component={NavLink}
                        sx={{
                            color: "text.primary",
                            backgroundColor: "surfaces.primary",
                            "&:hover": {
                                color: "text.primary",
                                backgroundColor: "surfaces.primary"
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
};

export default SpeeedDial;

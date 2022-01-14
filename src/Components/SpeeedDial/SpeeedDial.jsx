import { useContext, React } from "react";


import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import SegmentIcon from "@mui/icons-material/Segment";

import { DarkMode, LightMode, Login } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Context from "../../Context/Context";
import PopUp from "../PopUp/PopUp";

const actions = [
    { icon: <InfoIcon />, name: "About", to: "/about" },
    { icon: <HomeIcon />, name: "Home", to: "/" },

];

function SpeeedDial() {
    const context = useContext(Context);
    const { Mode, setMode, setOpen, } = context;

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const handleClickOpen = () => {
        setOpen(true);
        console.log("HI")
    };


    return (

        <SpeedDial
            direction="left"
            ariaLabel="SpeedDial basic example"
            sx={{
                alignSelf: "middle",


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
            <PopUp />
            <SpeedDialAction
                onClick={() => setOpen(true)}
                icon={<Login />}
                tooltipTitle={"Login"}
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

    );
};

export default SpeeedDial;

import { React, useContext } from "react";

import Context from "../../../Context/Context";

import { IconButton } from "@mui/material";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

function ResetBtn() {
    const context = useContext(Context);
    const { setCount } = context;

    return (
        <IconButton
            sx={{ color: "btns.reset" }}
            aria-label="Reset"
            onClick={() => setCount(0)}
        >
            <RestartAltRoundedIcon />
        </IconButton>
    );
}

export default ResetBtn;

import { React, useContext } from "react";

import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import Context from "../../../Context/Context";

function DecreaseBtn() {
    const context = useContext(Context);
    const { count, setCount } = context;

    return (
        <IconButton
            sx={{ color: "btns.minus" }}
            aria-label="Subtract"
            onClick={() => setCount(count - 1)}
        >
            <RemoveCircleOutlineIcon />
        </IconButton>
    );
}

export default DecreaseBtn;

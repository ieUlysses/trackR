import { React, useContext } from "react";

import Context from "../../../Context/Context";

import { IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

function IncreaseBtn() {
    const context = useContext(Context);
    const { count, setCount } = context;

    return (
        <IconButton
            sx={{ color: "btns.plus" }}
            aria-label="Add"
            onClick={() => setCount(count + 1)}
        >
            <AddCircleOutline />
        </IconButton>
    );
}

export default IncreaseBtn;

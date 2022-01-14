import { React, useContext } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";


import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import SignIn from "../SignIn/SignIn";
import Context from "../../Context/Context"

export default function PopUp() {
    const context = useContext(Context);
    const { open, setOpen } = context;

    const handleClose = () => {
        ;
    };

    /* 
  
  Notes:
  - Add colors for icons + text inputs                (V1: no differentiation for colorMode)
  - ToolTips for CloseIcon + Login with allignment     (Just for Close Icon... Login has Icon + text)
  - (! IMPORTANT ! When wiring up try and set Login as a trigger to close the Dialogue)
  -Future version can use the same template and use state to edit the entries ie using switch. If user =! Logged in return <Button> Login </Button : <Button> Logout </Button>  
  
  Thoughts:
  - Green for Login, Red for close 
  
  
  */

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    "& .MuiDialogContent-root": {
                        backgroundColor: "surfaces.primary"
                    }
                }}
            >
                <DialogContent>
                    <DialogActions sx={{ height: "5px" }}>
                        <IconButton
                            onClick={() => setOpen(false)}
                            sx={{
                                color: "text.primary",
                                "&:hover": {
                                    color: "red"
                                }
                            }}
                            autoFocus
                        >
                            <Close />
                        </IconButton>
                    </DialogActions>
                    <DialogTitle
                        id="alert-dialog-title"
                        sx={{ textAlign: "center", color: "text.primary" }}
                    >
                        Ready to Work?
                    </DialogTitle>

                    <SignIn />
                </DialogContent>
            </Dialog>
        </div>
    );
}

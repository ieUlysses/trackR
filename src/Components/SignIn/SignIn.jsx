import { Login } from "@mui/icons-material";
import { Container, Button, TextField } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

function SignIn() {
    const CustomInput = styled(TextField)(({ theme }) => ({
        color: theme.palette.text.primary,

        "& .MuiInputLabel-root": {
            fontFamily: "Roboto",
            color: "text.primary"
        },

        "& label.Mui-focused": {
            color: "orange"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "Orange"
        },
        "& .MuiInput-root": {
            fontFamily: "Roboto",

            "& fieldset": {
                borderColor: "black"
            },
            "&:hover fieldset": {
                borderColor: "yellow"
            },
            "&.Mui-focused fieldset": {
                borderColor: "grey"
            }
        }
    }));

    const CustomBtn = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.surfaces.primary,
        "&:hover": {
            backgroundColor: "green"
        }
    }));

    return (
        <>
            <Container
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    width: "100%",
                    height: "175px",
                    alignItems: "center"
                }}
            >
                <CustomInput id="userLogin" label="User name" variant="standard" />
                <CustomInput id="passLogin" label="Password" variant="standard" />
                <CustomBtn variant="contained" endIcon={<Login />}>
                    Login
                </CustomBtn>
            </Container>
        </>
    );
}

export default SignIn;

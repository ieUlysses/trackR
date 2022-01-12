import { React } from 'react'
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import SpeeedDial from '../SpeeedDial/SpeeedDial';
import { NavLink } from 'react-router-dom';



function NavBar() {

    return (

        < AppBar position="static" sx={{ backgroundColor: "surfaces.banner" }} >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant='text' sx={{ color: "text.primary" }} component={NavLink} to="/">
                    JarsaConsulting
                </Button>
                <SpeeedDial />
            </Toolbar>
        </AppBar >

    )



}

export default NavBar


{/* <AppBar position="static" sx={{
            color: "text.primary", backgroundColor: "surfaces.banner"

        }}>
            <Typography>
                JursaConsulting
            </Typography>
            <SpeeedDial />
        </AppBar > */}

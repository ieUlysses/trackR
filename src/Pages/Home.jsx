/* Notes:
    Basic functionality
        - landing page. present user with bg graphic, speed dial, 3 nav cards , logo 
        - allow for navigation between 3 flows
*/

import React from 'react'
import { Container, Box, Typography } from "@mui/material"

import OnPageNav from '../Components/OnPageNav/OnPageNav'
import LandingImgGallery from '../Components/LandingImgGallery/LandingImgGallery'

function Home() {


    return (



        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "100vh", }}>
            <Typography variant="h3">
                Delivering inovation since 1998
            </Typography>
            <LandingImgGallery />
            <OnPageNav />

        </Container>
    )
}

export default Home

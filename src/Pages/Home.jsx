/* Notes:
    Basic functionality
        - landing page. present user with bg graphic, speed dial, 3 nav cards , logo 
        - allow for navigation between 3 flows
*/

import React from 'react'
import { Container, Box } from "@mui/material"

import OnPageNav from '../Components/OnPageNav/OnPageNav'
import LandingImgGallery from '../Components/LandingImgGallery/LandingImgGallery'

function Home() {


    return (



        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "100vh", }}>

            <LandingImgGallery />


            <OnPageNav />

        </Container>
    )
}

export default Home

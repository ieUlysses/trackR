/* Notes:
    Basic functionality
        - landing page. present user with bg graphic, speed dial, 3 nav cards , logo 
        - allow for navigation between 3 flows
*/

import React from 'react'
import { Container } from "@mui/material"

import OnPageNav from '../Components/OnPageNav/OnPageNav'

function Home() {


    return (
        <Container>
            <h1>Home</h1>
            <OnPageNav />
        </Container>
    )
}

export default Home

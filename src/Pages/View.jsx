/* Notes:
    Basic functionality
        - alows user to view tutorial step by step 
    
        Mechanics
        - iterate through task array. each  screen shows the task number, img + discription
        - clicking next displays the next object in the task array

        solution:
        - create a counter. start state would be 0 clicking next would increase state by one, then do fetch for next position in array 
*/

import { React } from 'react'
import { Container, Box } from "@mui/material"

import TaskView from "../Components/TaskView/TaskView"


function View() {



    return (
        <Container maxWidth="xl" sx={{
            height: "100vh",
            display: "flex", justifyContent: "center", alignItems: "center",
        }}>

            <TaskView />

        </Container>
    )
}

export default View

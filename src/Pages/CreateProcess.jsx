/* Notes:
    Basic functionality
        - slide 2 + recurring take number of step + discription + img
        - following slides repeat above


    Mechanics
        - Each time a task is created it creates a new array
        - Each slide makes a new object with key+value pairs. values taken from ui
        - after each slide is added state for task gets pushed to array, then state is cleared
    Nav
        - on click => next step nav clear inputs
*/

import React from 'react'
import { Container } from "@mui/material"


function CreateProcess() {


    return (
        <Container>
            <h1>Create Process</h1>
        </Container>
    )
}

export default CreateProcess

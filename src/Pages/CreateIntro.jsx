/* Notes:
    Basic functionality
        - slide 1 add title + discription + img 
       
    Mechanics
        - Each time a task is created it creates a new array
        - Each slide makes a new object with key+value pairs. values taken from ui
        - after each slide is added state for task gets pushed to array, then state is cleared

    Nav
        - on click => next step nav to CreateProcess
*/

import React from 'react'
import { Container } from "@mui/material"
import Gallery from './Gallery'



function CreateIntro() {


    return (

        <Gallery />

    )
}

export default CreateIntro

/* Notes:
    Basic functionality
        - Gallery view showing cards with images from tutorials. 
        - allow for navigation between tutorials
*/

import React from 'react'
import { Box, Card, Container, IconButton, Typography } from "@mui/material"
import { Navigation, QuestionMarkRounded } from '@mui/icons-material'
import GalleryCard from '../Components/GalleryCard/GalleryCard'



function Gallery() {


    return (
        <Container sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "100vh", }}>
            {dataForCards.map((dataForCard) => (< GalleryCard img={dataForCard.img} title={dataForCard.title} blurb={dataForCard.blurb} helperText={dataForCard.helperText} />))}

        </Container >
    )
}


const dataForCards = [
    { img: "https://picsum.photos/200/300", title: "one", blurb: "lorem ipsu has saved my life so many times", helperText: "this will act as a little helper text provided by the Tooltip", to: "http://localhost:3000/" }, { img: "https://picsum.photos/200/300", title: "two", blurb: "lorem ipsu has saved my life so many times", helperText: "this will act as a little helper text provided by the Tooltip", to: "http://localhost:3000/" }, { img: "https://picsum.photos/200/300", title: "three", blurb: "lorem ipsu has saved my life so many times", helperText: "this will act as a little helper text provided by the Tooltip", to: "http://localhost:3000/" }, { img: "https://picsum.photos/200/300", title: "four", blurb: "lorem ipsu has saved my life so many times", helperText: "this will act as a little helper text provided by the Tooltip", to: "http://localhost:3000/" }
]


export default Gallery

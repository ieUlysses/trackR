import { React } from 'react'
import { Container, Tooltip } from "@mui/material"
import { Box, Card, IconButton, Typography, Button } from "@mui/material"
import { ArrowRightRounded, Navigation, QuestionMarkRounded } from '@mui/icons-material'



function GalleryCard(props) {
    console.log(props.img)


    return (
        <Card sx={{ backgroundColor: "surfaces.primary", color: "text.primary", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 250, height: 450 }}>

            <img src={props.img} alt={props.blurb} />

            <Typography >
                {props.title}
            </Typography>

            <Typography>
                {props.blurb}
            </Typography>

            <Button endIcon={<ArrowRightRounded />}>
                Check it out
            </Button >
        </Card>
    )
}

export default GalleryCard

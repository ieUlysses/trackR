import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material"
import React from "react"
import DecreaseBtn from "../ControlBtns/DecreaseBtn/DecreaseBtn"
import IncreaseBtn from "../ControlBtns/IncreaseBtn/IncreaseBtn"
import ResetBtn from "../ControlBtns/ResetBtn/ResetBtn"




function Slide(props) {

    return (
        <>


            <Box sx={{ display: "flex", height: "95%" }}>
                <Box sx={{ width: "45%", backgroundColor: "green", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <Typography variant="h1">{props.id}</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id deserunt corporis, vitae maxime voluptatibus modi doloremque quibusdam ratione possimus, omnis quis voluptatem fuga minima, alias cupiditate eius! Vel, excepturi deserunt!</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id deserunt corporis, vitae maxime voluptatibus modi doloremque quibusdam ratione possimus, omnis quis voluptatem fuga minima, alias cupiditate eius! Vel, excepturi deserunt!</Typography>
                </Box>
                <Box sx={{ width: "55%", backgroundColor: "blue", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ImageList variant="masonry" sx={{ height: 350, borderRadius: "5px", width: "75%" }} cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    style={{ borderRadius: "5px" }}
                                    src={`${item.img}?w=150&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=150&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>


        </>
    )
}




const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },





];



export default Slide
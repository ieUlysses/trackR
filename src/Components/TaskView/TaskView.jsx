import {
    ImageList, ImageListItem, Container,
    Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { React, useContext } from "react";
import Context from "../../Context/Context";
import DecreaseBtn from "../ControlBtns/DecreaseBtn/DecreaseBtn";
import IncreaseButton from "../ControlBtns/IncreaseBtn/IncreaseBtn";
import ResetBtn from "../ControlBtns/ResetBtn/ResetBtn";

import Slide from "../Slide/Slide"

function ResultBox() {
    const context = useContext(Context);
    const { count, data } = context;

    const Value = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
        fontFamily: "PlayfairDesign",
        fontSize: 34,
        textAlign: "center"
    }));

    const Error = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "center"
    }));

    function Control() {
        //if count is laregr than lenght of array then  or if count is less or equal to -1
        if (count >= data.length || count <= -1) {
            //console.log(" not between ");
            return <Error>Please Reset Counter</Error>;
        } else {
            //console.log("Between");
            return <Slide name={data[`${count}`].name} id={data[`${count}`].id} email={data[`${count}`].email} />;
        }

    }

    console.log(count);

    return (
        <>
            <Container sx={{ display: "flex", flexDirection: "column", height: "75vh", borderRadius: "5px", backgroundColor: "surfaces.primary" }}>
                <Control />
                <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", height: "12px" }}>
                    <DecreaseBtn />
                    <ResetBtn />
                    <IncreaseButton />


                </Box>
            </Container>
        </>
    );
}


export default ResultBox;
{/* <Card
                sx={{ backgroundColor: "surfaces.primary", width: "80vw", height: 550, borderRadius: "5px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                component={Paper}
                elevation={8}
            >
                <CardContent>
                    <Control />
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <DecreaseBtn />
                    <ResetBtn />
                    <IncreaseButton />
                </CardActions>
            </Card>


 */}

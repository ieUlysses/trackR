import {
    Card,
    CardActions,
    CardContent,
    Paper,
    Typography, Container
} from "@mui/material";
import { styled } from "@mui/system";
import { React, useContext } from "react";
import Context from "../../Context/Context";
import DecreaseBtn from "../ControlBtns/DecreaseBtn/DecreaseBtn";
import IncreaseButton from "../ControlBtns/IncreaseBtn/IncreaseBtn";
import ResetBtn from "../ControlBtns/ResetBtn/ResetBtn";

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
            return <Value>{data[`${count}`].name}</Value>;
        }
    }



    console.log(count);

    return (
        <>

            <Card
                sx={{ backgroundColor: "surfaces.primary", width: "175px" }}
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

        </>
    );
}

export default ResultBox;

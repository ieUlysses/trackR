import { React, /* useState */ } from 'react'
import { Card, CardActions, CardContent, /* Collapse ,*/ Container, IconButton, /* styled,  */ Typography } from "@mui/material"



import { NavLink } from "react-router-dom";
import {
    AddTask, Edit, RemoveRedEye, /* ArrowDropDown */
} from '@mui/icons-material';

/*
Notes:
    -   Instead of drop down look into mui helper text
    -   only if it doesn't function the same wit hopen close logic

*/

const actions = [
    { icon: <RemoveRedEye />, name: "View Tutorials", to: "/view", discription: "The following page will allow you to browse through our tutorials at your own leasure. Should you have any questions plese ask your team lead", brief: "Looking to up skill? You're in the right place", disabled: false },

    { icon: <AddTask />, name: "Complete Task", to: "/", discription: "The following page will allow you to Complete a task once you feel confident. You will be timed on this and must login before completing", brief: "Feeling confident and ready to complete a task?", disabled: true },

    { icon: <Edit />, name: "Create Tutorial", to: "/createIntro", discription: "The following page will allow you to Create a new Tutorial which will be made available to all of those with access to the platform. Learned a new skill? Feel free to share it", brief: "Learned any new tricks lately? Teach us", disabled: false }
];

/*
    Re Bool's:
        When using bools in the above manner do not follow normal syntax  ie:(dont wrap with quotes)
 */
/* 
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    color: theme.palette.text.primary,
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
})); */


function OnPageNav() {

    /* const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }; */

    return (
        <Container sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "75%", backgroundColor: "blue" }}>
            {actions.map((action) => (
                <Card sx={{ maxWidth: "250px", backgroundColor: "surfaces.primary", }}>
                    <CardContent>
                        <Typography sx={{ textAlign: "center" }}>
                            {action.brief}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ height: "15px" }}>
                        <IconButton to={action.to} component={NavLink} sx={{ color: "text.primary" }} disabled={action.disabled}>
                            {action.icon}
                        </IconButton>
                        {/*  <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ArrowDropDown />
                        </ExpandMore> */}
                    </CardActions>
                    {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Notes:</Typography>
                            <Typography paragraph>
                                {action.discription}
                            </Typography>
                        </CardContent>
                    </Collapse> */}


                </Card>))
            }
        </Container >
    )
}

export default OnPageNav

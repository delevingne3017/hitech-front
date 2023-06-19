import { PatternSharp } from '@mui/icons-material'
import  {Paper ,Buttun } from '@mui/material'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

function Item({item})
{
    return(
        <Paper>
            <img src ={item.image} style  />
            <Button variant="contained">
                <ArrowBackIosNewSharpIcon>

                </ArrowBackIosNewSharpIcon>
                </Button>
        </Paper>
    )
}



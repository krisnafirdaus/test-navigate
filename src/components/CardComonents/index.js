import React from "react"
import {Card, CardMedia, CardHeader, CardContent, Typography, IconButton, Avatar} from '@mui/material';
import {red} from '@mui/material/colors';
import {MoreVert} from '@mui/icons-material';

const CardComponents = ({title, picture}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={picture}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {title}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default CardComponents
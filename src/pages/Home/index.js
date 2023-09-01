import React from "react";
import { Button, Checkbox, Alert, Grid } from '@mui/material';
import CardComponents from '../../components/CardComonents';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Home = () => {
    const data = [
        {
            id: 1,
            gambar: "https://images.unsplash.com/photo-1693170509455-f28aefcd1005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
            title: "Shrimp and Chorizo Paella",
        },
        {
            id: 2,
            gambar: "https://images.unsplash.com/photo-1693018011779-27f70a440a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
            title: "Shrimp and Chorizo Paellattttt",
        },
    ]

    return (
        <div className="detail">
            <h1>Home</h1>

            <Button variant="contained" sx={{
                backgroundColor: 'red',
                ":hover": {
                    backgroundColor: 'red'
                }
            }}>Click</Button>
            <Checkbox {...label} />
            <div>
                <Alert severity="error">This is an error alert — check it out!</Alert>
            </div>

            <div>
                <Grid container spacing={2}>
                {data.map((item) => {
                    console.log(item.title);
                    return (
                       <Grid item xs={3} key={item.id}>
                         <CardComponents title={item.title}  picture={item.gambar}/>
                       </Grid>
                    )
                })}
                </Grid>
              
            </div>
        </div>
    )
}

export default Home;
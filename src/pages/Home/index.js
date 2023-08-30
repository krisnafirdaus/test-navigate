import React from "react";
import { Button, Checkbox, Alert } from '@mui/material';
import CardComponents from '../../components/CardComonents';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Home = () => {
    return (
        <div>
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
                <CardComponents />
            </div>
        </div>
    )
}

export default Home;
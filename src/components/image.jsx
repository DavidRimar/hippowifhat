import { Grid, Paper } from "@mui/material";
import React from 'react';

export default function Image({src, alt}) {
    return <Grid container spacing={2}>
    <br/>
    <Grid item xs={12}>
        <Paper variant="outlined">
            <img src={src} alt={alt} />
        </Paper>
    </Grid>
</Grid>
}
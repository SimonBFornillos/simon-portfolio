import React from 'react';
import { Box, Grid } from "@mui/material";
import { dataportfolio } from "../../contents";
import "./Projects.scss"; 
import ProjectBlock from './ProjectBlock';

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {dataportfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <ProjectBlock
                            image={project.img}
                            live={project.live}
                            source={project.source}
                            title={project.portfoliotitle}
                            description={project.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}; 

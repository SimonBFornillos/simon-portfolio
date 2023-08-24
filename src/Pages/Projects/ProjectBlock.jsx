import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function ProjectBlock(props) {
    const { image, live, source, title, description } = props;
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box component={'img'} src={image} alt={'mockup'} className="portfolio-image" />
            <h1 style={{ fontSize: '2rem' }}>{title}</h1>
            <p>{description}</p>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                <Box p={1} border={'2px'} borderRadius={'25px'}>
                    <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} className="portfolio-link" />
                </Box>
                <Box p={1} border={'2px'} borderRadius={'25px'}>
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} className="portfolio-link" />
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectBlock;
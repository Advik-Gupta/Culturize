import React from 'react'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const RatingDisplay = ({value}) => {

    return (
            <Box>
                <Rating name="read-only" size="medium" value={value} readOnly />
            </Box>
    )
}

export default RatingDisplay;
import React                        from 'react'
import { Box }                      from '@mui/material';
import Typography                   from '@mui/material/Typography';
import Rating                       from '@mui/material/Rating';

// =========== Ratings =============
const Ratings = ({titleRating,data}) => {
  return (
    <>
        <Box style={{ padding : '12px' }}>
            <Typography style={{ textAlign : 'center',fontSize : '20px',fontWeight : 'bold' }}  color="black">
                {titleRating}
            </Typography>
                <Rating 
                    style       = {{ color: 'black' }} 
                    name        = "read-only" 
                    value       = {data} 
                    readOnly 
                />
            </Box>
    </>
  )
}

export default Ratings
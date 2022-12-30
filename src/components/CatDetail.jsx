import React        from 'react';
import Typography   from '@mui/material/Typography';



// =========== Cat Detail ============
const CatDetail = ({detailTitle,data}) => {
    return (
        <Typography 
            style       = {{ fontSize : '20px',textAlign : 'justify' }} 
            color       = "black" 
            className   = 'padding-fix ' 
        >
            <span style={{ fontWeight :'bold' }}> {detailTitle} : </span> {data}
        </Typography>
    )
}

export default CatDetail
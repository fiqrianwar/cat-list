    import React        from 'react';
    import TextField    from '@mui/material/TextField';


    // Input Search
    const InputSearch = ({register,name}) => {
    return (
        <>
        {/* ============ Input Search ============= */}
            <TextField 
                {...register(name)} 
                fullWidth label = "Search..." 
                id              = "fullWidth" 
                
            />
        </>
        
        
        

    )
    }

    export default InputSearch
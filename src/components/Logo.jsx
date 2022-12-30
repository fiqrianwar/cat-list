    import React        from 'react'
    import { Stack }    from '@mui/material'

    const Logo = () => {

        const styleText = {
            fontSize    : '50px',
            textAlign   : 'center',
            fontFamily  : 'jack'
        }

    return (
                <>
                    <Stack  direction="row" style={{ justifyContent: 'center' }}>
                        <img 
                            alt     = "cat" 
                            src     = "img/cat_cute.png" 
                            style   = {{ width : '10%' }}
                        />
                    </Stack>
                    <h1 style={styleText}>Cat List</h1>
                </>
        )
    }

    export default Logo
    import React                        from 'react'
    import { useState }                 from 'react';
    import KeyboardArrowUpIcon          from '@mui/icons-material/KeyboardArrowUp';
    import KeyboardArrowDownIcon        from '@mui/icons-material/KeyboardArrowDown';
    import Ratings                      from './Ratings';
    import CatDetail                    from './CatDetail';

    import { 
                Box, 
                Stack,
                Card,
                CardContent,
                Typography 
            
            } from '@mui/material';



    const CatCard = ({data}) => {

        const [expanded, setExpanded] = useState(false);
        const handleExpandClick = (index) => {
                if (expanded === index) {
                    return setExpanded(null)
                    
                }
                console.log(index);
                setExpanded(index)
            
        };

        const styleCard = {
            width           : '50%',
            margin          : 'auto',
            marginTop       : '2%' ,
            backgroundColor : '#ffc30b',
        }


    return (
                <div>
                    {
                        data.map((item,index) => 
                            <Card className = 'cat-card' key={index} style={styleCard}>
                                <CardContent >
                                    <Stack direction = "row" style = {{ justifyContent : 'space-between' }}>
                                        <Typography 
                                            variant         = "h5" 
                                            component       = "div" 
                                            gutterBottom 
                                            style = {{ fontFamily : 'teen',fontWeight : 'bold' }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <span 
                                                style   = {{ cursor : 'pointer' }}
                                                onClick = {() => handleExpandClick(index)}> 
                                                {expanded === index ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }
                                        </span>
                                    </Stack>
                                    
                                    {
                                        expanded === index ? (
                                            <Box>
                                                {/* ========== Cat Detail ========= */}
                                                <CatDetail
                                                    data        = {item.temperament}
                                                    detailTitle = "Temprament"
                                                />
                                                <CatDetail
                                                    data        = {item.origin}
                                                    detailTitle = "Origin"
                                                />
                                                <CatDetail
                                                    data        = {item.weight.imperial}
                                                    detailTitle = "Imperial"
                                                />
                                                <CatDetail
                                                    data        = {item.weight.metric}
                                                    detailTitle = "Metric"
                                                />
                                                <CatDetail
                                                    data        = {item.life_span}
                                                    detailTitle = "Life Span"
                                                />
                                                <CatDetail
                                                    data        = {item.description}
                                                    detailTitle = "Description"
                                                />
                                                

                                                {/* ========= Rating ======== */}
                                                <Stack direction="row" style={{ justifyContent :'space-around',flexWrap: 'wrap' }} className='padding-fix'>
                                                    <Ratings
                                                        data        = {item.affection_level}
                                                        titleRating = 'Affection Level'
                                                    />
                                                    <Ratings
                                                        data        = {item.child_friendly}
                                                        titleRating = 'Child Friendly'
                                                    />
                                                    <Ratings
                                                        data        = {item.grooming}
                                                        titleRating = 'Grooming'
                                                    />
                                                    <Ratings
                                                        data        = {item.energy_level}
                                                        titleRating = 'Energy Level'
                                                    />
                                                    <Ratings
                                                        data        = {item.health_issues}
                                                        titleRating = 'Health Issues'
                                                    />
                                                    <Ratings
                                                        data        = {item.intelligence}
                                                        titleRating = 'Intelligence'
                                                    />
                                                    <Ratings
                                                        data        = {item.social_needs}
                                                        titleRating = 'Social Needs'
                                                    />
                                                    <Ratings
                                                        data        = {item.natural}
                                                        titleRating = 'Natural'
                                                    />
                                                    <Ratings
                                                        data        = {item.indoor}
                                                        titleRating = 'Indoor'
                                                    />
                                                    <Ratings
                                                        data        = {item.adaptability}
                                                        titleRating = 'Adaptability'
                                                    />
                                                    <Ratings
                                                        data        = {item.dog_friendly}
                                                        titleRating = 'Dog Friendly'
                                                    />
                                                    <Ratings
                                                        data        = {item.shedding_level}
                                                        titleRating = 'Shedding Level'
                                                    />
                                                </Stack>
                                                
                                                
                                            </Box>
                                        ) : null
                                    }
                                    
                                </CardContent>
                                
                            </Card>
                        )
                    }
                </div>
    )
    }

    export default CatCard
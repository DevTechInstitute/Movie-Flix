import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

export const CardMovie = ({ movie }) => {

    const image = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`


    return (
        <Grid sx={{ mr:3 }}>
            <Link>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            image={ image }
                            // image={'https://media.vandal.net/m/9-2022/2022991163975_1.jpg.webp'}
                            alt={ movie.title }
                            sx={{ transition: 'all .3s ease-in-out ' }}
                        />
                    </CardActionArea>
                </Card>
            </Link>
            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{ movie.title }</Typography>
                <Typography fontWeight={600}>Calificacion: { movie.vote_average }</Typography>
            </Box>

        </Grid>
    )
}

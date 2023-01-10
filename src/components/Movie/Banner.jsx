import { PlayArrow } from '@mui/icons-material'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import React from 'react'

export const Banner = ({ movie }) => {

    const image = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

    return (
        <Box 
            sx={{
                minHeight:'90vh',
                backgroundImage:`linear-gradient(05deg, rgba(0, 0, 0, 1) 10% , rgba(0, 0, 0, 0.3)), url(${ image })`,
                backgroundPosition:'center center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                display: 'flex',
                alignItems:'center',
            }}
            className='banner'
        >
            <Container>

                <Typography variant='h2' sx={{ fontSize:'4rem', fontWeight:700, mb:'2rem',  }}>{ movie.title }</Typography>
                <Typography sx={{ maxWidth:'750px', mb:'2rem' }}>{ movie.overview }</Typography>

                <Button>
                    <PlayArrow/>
                    Ver pelicula
                </Button>

            </Container>
        </Box>
    )
}

import { PlayArrow } from '@mui/icons-material'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import React from 'react'

export const Banner = () => {
    return (
        <Box 
            sx={{
                minHeight:'70vh',
                backgroundImage:' linear-gradient(10deg,   rgba(0, 0, 0, 1) 10% , rgba(0, 0, 0, 0.4)), url(https://cdn.culturagenial.com/es/imagenes/casa-papel-cartel-cke.jpg)',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                display: 'flex',
                alignItems:'center',
            }}
            className='banner'
        >
            <Container>

                <Typography variant='h2' sx={{ fontSize:'4rem', fontWeight:700, mb:'2rem',  }}>Titulo Pelicula</Typography>
                <Typography sx={{ maxWidth:'750px', mb:'2rem' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi quibusdam, 
                    sequi dolorum perspiciatis dolorem iste recusandae, excepturi cupiditate, veniam placeat 
                    possimus mollitia incidunt velit doloremque pariatur. Eveniet, excepturi corrupti!
                </Typography>

                <Button>
                    <PlayArrow/>
                    Ver pelicula
                </Button>

            </Container>
        </Box>
    )
}

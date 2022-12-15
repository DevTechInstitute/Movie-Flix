import { Container, Grid, Typography } from '@mui/material'
import { TrendingUpOutlined } from '@mui/icons-material'
import { CardMovie } from './CardMovie'


export const ListadoMovies = ({ title, icon, movies }) => {

    console.log(movies)

    return (
        <Container>
            <Typography variant='h3' sx={{ display:'flex', gap:1, alignItems:'center', mb:2 }}>
                <TrendingUpOutlined/> Ultimas tendencias
            </Typography>

            <Grid container spacing={2}>
                {
                    movies.map( (movie, index) => 
                        <CardMovie
                            key={ index }
                            movie={ movie }
                        />
                    )
                }
            </Grid>

        </Container>
    )
}

import { Container, Typography } from '@mui/material'
import { CardMovie } from './CardMovie'
import Slider from 'react-slick'




export const ListadoMovies = ({ title, icon, movies }) => {



    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 5
    };
    return (
        <Container>
            <Typography variant='h3' sx={{ display:'flex', gap:1, alignItems:'center', mb:2 }}>
                { icon } { title }
            </Typography>


            <Slider {...settings}>
            {
                    movies.map( (movie, index) => 
                        <CardMovie
                            key={ index }
                            movie={ movie }
                        />
                    )
                }
            </Slider>

        </Container>
    )
}

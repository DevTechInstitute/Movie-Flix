import { useMovies } from "./hooks/useMovies";
import { Layout } from "./components/ui";
import { Banner, CarouselMovies } from "./components/Movie";

import { Container, Typography } from "@mui/material";
import { AssessmentOutlined, CategoryOutlined, TrendingUpOutlined } from "@mui/icons-material";

const App = () => {
  const { nowPlaying, isLoading } = useMovies();

  if (isLoading) {
    return (
      <Layout>
        <Typography>Cargando...</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Banner movie={ nowPlaying[0] }/>
      <Container maxWidth='xl'>
        <CarouselMovies movies={nowPlaying} title={ 'Ultimas agregadas' }/>
        <CarouselMovies movies={nowPlaying} title={ 'Top 10 en Bolivia' }/>
        <CarouselMovies movies={nowPlaying} title={ 'Categoria de Horror' }/>
      </Container>
    </Layout>
  );
};

export default App;

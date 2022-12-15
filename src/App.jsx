import { Typography } from '@mui/material'
import React from 'react'
import { Banner } from './components/Movie/Banner'
import { ListadoMovies } from './components/Movie/ListadoMovies'
import { Layout } from './components/ui'
import { useMovies } from './hooks/useMovies'

const App = () => {

  const { nowPlaying, isLoading } = useMovies();

  if(  isLoading ){
    return(
      <Layout>
        <Typography>Cargando...</Typography>
      </Layout>
    )
  }



  return (
    <Layout>

      <Banner/>
      <ListadoMovies
        movies={ nowPlaying }
      />
    </Layout>
  )
}

export default App
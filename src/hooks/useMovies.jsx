import { useEffect, useState } from "react"
import movieDb from "../api/movieDb"

export const useMovies = () => {

    const [nowPlaying, setNowPlaying] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMovies = async () => {
        setIsLoading( true )
        const response = await movieDb.get("/now_playing")
        setNowPlaying( response.data.results )   
        setIsLoading( false )
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        nowPlaying,
        isLoading
    }   
}
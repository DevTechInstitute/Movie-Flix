import axios from "axios";

const movieDb = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params:{
        api_key: "0b7c2c867e93b8d01d69d203e03c8a5b",
        language: "es-ES"
    }
});

export default movieDb;
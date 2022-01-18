const API_KEY = '7cfc1357043eaf66ae6f3d94546704e4'

<<<<<<< HEAD
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie_top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests
=======
//drama, thriller, children, suspense, romance - films

const requests = {
    fetchDocumentariesSeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchChildrenSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchFeelGoodSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchChildrenMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchSuspenseMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests
>>>>>>> features

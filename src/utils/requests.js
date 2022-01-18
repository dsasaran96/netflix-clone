const API_KEY = '7cfc1357043eaf66ae6f3d94546704e4'

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

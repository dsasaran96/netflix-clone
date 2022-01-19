const API_KEY = '###REMOVED###'

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

    fetchFeature: `/trending/all/day?api_key=${API_KEY}`
}

export default requests

export default function selectionFilter( { series, films }) {
    return {
        series: [
            {
                title: 'Documentaries',
                data: series.filter((item) => item.genre_ids.includes(99) && item.backdrop_path !== null),
            },
            {
                title: 'Comedies',
                data: series.filter((item) => item.genre_ids.includes(35) && item.backdrop_path !== null),
            },
            {
                title: 'Children',
                data: series.filter((item) => item.genre_ids.includes(10762) && item.backdrop_path !== null),
            },
            {
                title: 'Crime',
                data: series.filter((item) => item.genre_ids.includes(80) && item.backdrop_path !== null),
            },
            {
                title: 'Feel Good',
                data: series.filter((item) => item.genre_ids.includes(10766) && item.backdrop_path !== null),
            }
        ],
        films: [
            {
                title: 'Drama',
                data: films.filter((item) => item.genre_ids.includes(18) && item.backdrop_path !== null)
            },
            {
                title: 'Thriller',
                data: films.filter((item) => item.genre_ids.includes(53) && item.backdrop_path !== null)
            },
            {
                title: 'Children',
                data: films.filter((item) => item.genre_ids.includes(16) && item.backdrop_path !== null)
            },
            {
                title: 'Suspense',
                data: films.filter((item) => item.genre_ids.includes(53) && item.backdrop_path !== null)
            },
            {
                title: 'Romance',
                data: films.filter((item) => item.genre_ids.includes(10749) && item.backdrop_path !== null)
            },
        ]
    }
}
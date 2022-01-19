import { useEffect, useState } from "react";
import requests from '../utils/requests'
import axios from '../helpers/axios'

export default function useContent(target) {
    const [content, setContent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const childrenMovies = await axios.get(requests.fetchChildrenMovies)
            const childrenSeries = await axios.get(requests.fetchChildrenSeries)
            const comedySeries = await axios.get(requests.fetchComedySeries)
            const crimeSeries = await axios.get(requests.fetchCrimeSeries)
            const documentarySeries = await axios.get(requests.fetchDocumentariesSeries)
            const dramaMovies = await axios.get(requests.fetchDramaMovies)
            const feelGoodSeries = await axios.get(requests.fetchFeelGoodSeries)
            const romanceMovies = await axios.get(requests.fetchRomanceMovies)
            const suspenseMovies = await axios.get(requests.fetchSuspenseMovies)
            const thrillerMovies = await axios.get(requests.fetchThrillerMovies)
            setContent(content.concat(childrenMovies.data.results, childrenSeries.data.results, comedySeries.data.results, crimeSeries.data.results, documentarySeries.data.results, dramaMovies.data.results, feelGoodSeries.data.results, romanceMovies.data.results, suspenseMovies.data.results, thrillerMovies.data.results))
            }
            console.log(requests.fetchFeature)
        fetchData();
    }, [requests])

    return { [target]: content }
}
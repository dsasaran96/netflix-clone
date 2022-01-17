import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";
import requests from "../utils/requests";

export default function Browse() {
    const { series } = useContent('series')
    const { films } = useContent('films')

    const slides = selectionFilter({ series, films })

    return <BrowseContainer slides={slides} />
}
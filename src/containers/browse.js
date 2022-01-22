import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from '../context/firebase'
import { Header, Loading, Card, Player } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { FooterContainer } from './footer'
import Fuse from 'fuse.js' 
import { HiddenOverflow } from "../components/card/styles/card";
import requests from '../utils/requests'
import axios from '../helpers/axios'

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series')
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [slideRows, setSlideRows] = useState([])
    const [feature, setFeature] = useState([])

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    useEffect(() => {
        const getFeature = async () => {
            const random = Math.floor(Math.random() * 20)
            const movie = await axios.get(requests.fetchFeature)
                                 .then(response => setFeature(response.data.results[random]))
            return movie
        }
        getFeature()
    }, [requests])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        const fuse = new Fuse(slideRows, { 
            keys:['data.description', 'data.title', 'data.genre']
        })
        const results = fuse.search(searchTerm).map(({ item }) => item)

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category])
        }
    }, [searchTerm])

    return profile.displayName ? (
        <HiddenOverflow>
            {
            loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <Header bg={true} src={`https://image.tmdb.org/t/p/original/${feature.backdrop_path}`}>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>Series</Header.TextLink>
                        <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch {feature.name ? feature.name : feature.title} now!</Header.FeatureCallOut>
                    <Header.Text>{feature.overview}</Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item, i) => (
                                <Card.Item key={`${item.id}-${i}`} item={item}>
                                    <Card.Image src={`https://image.tmdb.org/t/p/w780/${item.backdrop_path}`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title || item.name}</Card.SubTitle>
                                        {
                                            item.overview.length > 150 ? <Card.Text>{item.overview.slice(0, 150).concat('...')}</Card.Text> 
                                            : <Card.Text>{item.overview}</Card.Text>
                                        }
                                     </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/bunny.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer />
        </HiddenOverflow>
    ) : <SelectProfileContainer user={user} setProfile={setProfile}/>
}
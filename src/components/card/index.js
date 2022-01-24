import React, { createContext, useContext, useState, useEffect } from "react";
import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, ScrollButton, Content, Item, Image, Meta, Entities, ButtonContainer, EntitiesContainer } from './styles/card'

export const FeatureContext = createContext()
export const ScrollContext = createContext()

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    const [posX, setPosX] = useState(0)
    const [currPage, setCurrPage] = useState(0)
    const [itemsDisplayed, setItemsDisplayed] = useState(5)
    const lastIndex = Math.floor(children.length / itemsDisplayed)

    const width = window.innerWidth

    const isMobile = width <= 768

    useEffect(() => {
        if(isMobile) {
            setItemsDisplayed(1)
        } else {
            setItemsDisplayed(5)
        }
    }, [window.innerWidth])

    const handleSlide = (direction) => {
        if(direction === 'right') {
            if(currPage < lastIndex) {
                if(currPage === lastIndex - 1) {
                    const newPage = currPage + 1
                    const newPos = posX - 295 * (children.length - ((currPage + 1) * itemsDisplayed))
                    setPosX(newPos)
                    setCurrPage(newPage)
                } else {
                    const newPos = posX - 295 * itemsDisplayed
                    const newPage = currPage + 1;
                    setPosX(newPos)
                    setCurrPage(newPage)
                }
            }
            if(currPage >= lastIndex) {
                setCurrPage(0)
                setPosX(0)
            }
        }

        if(direction === 'left') {
            if(currPage === 0) {
                const newPos = posX - 295 * (children.length - (currPage + 1) * itemsDisplayed)
                setPosX(newPos)
                setCurrPage(lastIndex)
            } else {
                const newPos = posX + 295 * itemsDisplayed
                const newPage = currPage - 1
                if(newPage === 0) {
                    setCurrPage(0)
                    setPosX(0)
                } else {
                    setCurrPage(newPage)
                    setPosX(newPos)
                }
            }
        }
    }

    return (
        <ScrollContext.Provider value={{ posX }}>
            <EntitiesContainer>
                <ButtonContainer>
                    <ScrollButton direction={'left'} onClick={() => handleSlide('left')}><img src="/images/icons/chevron-left.png" alt="prev" /></ScrollButton>
                    <ScrollButton direction={'right'} onClick={() => handleSlide('right')}><img src="/images/icons/chevron-right.png" alt="next" /></ScrollButton>
                </ButtonContainer>
                <Entities {...restProps}>{children}</Entities>
            </EntitiesContainer>
        </ScrollContext.Provider>
    )
}

Card.Item = function CardItem({ item, children, pos, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    const { posX } = useContext(ScrollContext)

    return  <Item onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
    }} {...restProps} pos={posX}>{children}</Item> }

Card.Image = function CardImage ({ ...restProps }) {
    return <Image {...restProps} />
}

Card.Feature = function CardFeature ({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)

    return showFeature ? (
        <Feature src={`https://image.tmdb.org/t/p/w1280/${itemFeature.backdrop_path}`} {...restProps}>
            <Content style={{zIndex: 10000}}>
                <FeatureTitle>{itemFeature.title || itemFeature.name }</FeatureTitle>
                <FeatureText>{itemFeature.overview}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>
            {children}
            </Content>
        </Feature>
    ) : null
}

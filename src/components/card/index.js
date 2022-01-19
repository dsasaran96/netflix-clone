import React, { createContext, useContext, useState, useRef } from "react";
import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, ScrollButton, Content, Item, Image, Meta, Entities, ButtonContainer, EntitiesContainer } from './styles/card'

export const FeatureContext = createContext()

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
    const width = useRef(null)

    const handleSlide = (direction) => {
        if(direction === 'left' && posX !== 0) {
            const newPos = posX + 295;
            setPosX(newPos)
        } else if (direction === 'right' && ((posX * (-1)) <= (width.current.offsetWidth - 295*6))) {
            const newPos = posX - 295;
            setPosX(newPos)
        }
    }

    return (
        <EntitiesContainer>
            <ButtonContainer>
                <ScrollButton onClick={() => handleSlide('left')}><img src="/images/icons/chevron-left.png" alt="prev" /></ScrollButton>
                <ScrollButton onClick={() => handleSlide('right')}><img src="/images/icons/chevron-right.png" alt="next" /></ScrollButton>
            </ButtonContainer>
            <Entities {...restProps} style={{ transform: `translateX(${posX}px)` }} ref={width}>{children}</Entities>
        </EntitiesContainer>
    )
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)

    return  <Item onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
    }} {...restProps}>{children}</Item> }

Card.Image = function CardImage ({ ...restProps }) {
    return <Image {...restProps} />
}

Card.Feature = function CardFeature ({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)

    return showFeature ? (
        <Feature src={`https://image.tmdb.org/t/p/w1280/${itemFeature.backdrop_path}`} {...restProps}>
            <Content style={{zIndex: 10000}}>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.overview}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>
            {children}
            </Content>
        </Feature>
    ) : null
}


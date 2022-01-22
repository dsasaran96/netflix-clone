import styled from "styled-components";

export const EntitiesContainer = styled.div`
    display: flex;
    align-items: center;
`

export const HiddenOverflow = styled.div`
    overflow-x: scroll;
`

export const ScrollButton = styled.div`
    height: 170px;
    background: ${({ direction }) => direction === 'left' ? `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)` : `linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)`};
    z-index: 100;
    width: 51px;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.9);
        img {
            transform: scale(1.2);
            filter: invert(28%) sepia(79%) saturate(5819%) hue-rotate(350deg) brightness(102%) contrast(103%);
        }
    }
    img {
        filter: brightness(0) invert(1);
        width: 16px;
        height: 16px;
        transition: all 0.5s;
    }

    &:last-of-type {
        width: 69px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100vw;
    height: auto;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;
    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }
`

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};
    
    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`

export const SubTitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`


export const FeatureTitle = styled(Title)`
    margin-left: 0;
`
export const FeatureText = styled.p`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
    margin: 0;
    @media (max-width: 600px) {
        line-height: 22px;
    }
` 

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    height: 360px;
    background-color: black;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom right, #000000, #00000000);
        opacity: 1;
    }
    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;
        }
    }
`

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;
    @media (max-width: 1000px) {
        margin: 30px;
        max-width: none;
    }
` 

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
` 

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: none;
    align-items: center;
    transition: all 0.4s;
    width: 99vw;
    height: 220px;
    overflow: hidden; 
` 

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    transform: ${({ pos }) => pos && `translateX(${pos}px)`};
    &:hover {
        box-shadow: 0px 0px 15px 5px #ff1e1e;
        z-index: 1000;
    }
    @media (min-width: 700px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 9000;
        }
    }
    &:first-of-type {
        margin-left: 56px;
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }
    &:last-of-type {
        margin-right: 56px;
        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
` 

export const Image = styled.img`
    border: 0;
    width: 290px;
    cursor: pointer;
    height: 170px;
    padding: 0;
    margin: 0;
` 
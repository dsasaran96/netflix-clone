import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { Group, Background, ButtonLink, Container, Logo, Feature, Text, FeatureCallOut, TextLink, Picture, Dropdown, Profile, Search, SearchIcon, SearchInput, PlayButton } from './styles/header'

export default function Header( { bg, src, children, ...restProps } ) {
    return bg ? <Background src={src ? src : '../images/misc/home-bg.jpg'} {...restProps}>{children}</Background> : children
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.ButtonLink = function HeaderButtonLink( { children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    )
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Search films and series" active={searchActive} />
        </Search>
    )
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <TextLink {...restProps}>{children}</TextLink>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = function HeaderDropdown({ children, ... restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}
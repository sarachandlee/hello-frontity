import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'


const Header = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    return (
        <HeaderWrap isPostType={data.isPostType} isPage={data.isPage}>
            <HeaderContent>
                <h1>Hello Frontity</h1>
                { state.theme.isUrlVisible 
                    ? <>Current url: {state.router.link} <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button></> 
                    : <Button onClick={actions.theme.toggleUrl}>&#x3c; Show URL</Button> 
                }
                <Menu>
                    <Link link='/'>Home</Link>
                    <Link link='/about-us'>About us</Link>
                    <Link link='/destinations'>Destinations</Link>
                </Menu>
            </HeaderContent>
        </HeaderWrap>
    )
}

export default connect(Header);

const HeaderWrap = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: ${(props) => (props.isPostType ? ( props.isPage ? "lightsteelblue" : "lightseagreen") : "maroon")};

    h1 {
        color: #4a4a4a;
    }
`

const HeaderContent = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto;
`


const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    & > a {
        margin-right: 1em;
        color: steelBlue;
        text-decoration: none;
    }
`

const Button = styled.button`
    background: transparent;
    border: none;
    color: #aaa;

    :hover {
        cursor: pointer;
        color: #888;
    }
`
import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const List = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const Html2React = libraries.html2react.Component


    return (
        <Items>
            {data.items.map( (item) => {
                    const post = state.source[item.type][item.id]
                    const region = state.source.regions[post.regions[0]].name
                    return (
                        <>
                            <Link key={item.id} link={post.link}>
                                {post.title.rendered}
                            </Link>
                            <Html2React html={post.excerpt.rendered} />
                            <Region>{region}</Region>
                            
                        </>                         
                    )
                }
            )}
        </Items>
    )
}

export default connect(List)

const Items = styled.div`
    & > a {
        display: block;
        margin: 6px 0;
        font-size: 1.2em;
        color: green;
        text-decoration: none;
    }
`

const Region = styled.p`
    color: cornflowerblue;
    font-style: italic;
`

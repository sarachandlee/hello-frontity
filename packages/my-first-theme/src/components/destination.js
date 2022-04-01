import React from 'react'
import { connect, Head } from 'frontity'

const Destination = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const destination = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component

    return (
        <div>
            <Head>
                <title>{destination.title.rendered}</title>
                <meta 
                    name='description'
                    content={destination.excerpt.rendered}
                />
            </Head>
            <h2>Destination: {destination.title.rendered}</h2>
            <Html2React html={destination.content.rendered} />
        </div>
    )
}

export default connect(Destination)
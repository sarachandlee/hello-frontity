import React from 'react'
import { connect } from 'frontity'
import Switch from '@frontity/components/switch'
import PostList from './postList'
import DestinationList from './destinationList'

const List = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <section>
            <Switch>
                <DestinationList when={data.isDestinationsArchive} />
                <PostList when={data.isArchive} />
            </Switch>
        </section>
    )
}

export default connect(List)

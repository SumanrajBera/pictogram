import React, { useEffect } from 'react'
import '../style/feed.scss'
import '../style/post.scss'
import Post from '../components/Post'
import { useFeed } from '../hook/useFeed'

const Feed = () => {
    const { feed, loading } = useFeed()

    useEffect(() => {
        console.log(feed)
    }, [feed])

    return (
        <div className="feed">
            <div className="posts">
                {
                    feed.map((el, idx) => {
                        return <Post key={idx} profileImg={el.user.profileImg} username={el.user.username} post={el.imgUrl} caption={el.caption} />
                    })
                }

            </div>
        </div>
    )
}

export default Feed
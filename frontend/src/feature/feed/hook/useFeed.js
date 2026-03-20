import { useContext, useEffect } from "react";
import { FeedContext } from "../feed.context";
import { getFeed } from "../services/feed.api";

export function useFeed() {
    let { feed, setFeed, loading, setLoading } = useContext(FeedContext)

    async function fetchFeedData() {
        setLoading(true)
        const feedData = await getFeed()
        setFeed(feedData.posts)
        setLoading(false)
    }

    useEffect(() => {
        fetchFeedData();
    }, []);

    return { feed, loading, fetchFeedData }
}
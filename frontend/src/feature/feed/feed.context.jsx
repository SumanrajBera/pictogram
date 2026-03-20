import { createContext, useState } from "react";

export const FeedContext = createContext()

export const FeedProvider = ({ children }) => {
    const [feed, setFeed] = useState([])
    let [loading, setLoading] = useState(true)

    return <FeedContext.Provider value={{ feed, loading, setFeed, setLoading }}>
        {children}
    </FeedContext.Provider>

}
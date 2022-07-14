import { useState, useMemo, useContext, useEffect } from "react";
import { useQuery } from "react-query";

import { BlogStore } from "@context/blog";
import { getBlog } from "@services/blog";

import BlogItem from "./BlogItem"
import BlogPagination from "./BlogPagination";

function Blog() {
    const { data: blog = [], isLoading } = useQuery(
        "blog",
        getBlog
    )

    const { blogState } = useContext(BlogStore)

    const [page, setPage] = useState(1)

    const dataBlogs = useMemo(() => {
        const data = [...blog].filter((el) => 
            el.title.toLowerCase().indexOf(blogState.keyword.toLowerCase()) !== -1
        )

        const offset  = (page - 1) * 6

        return {
            total: data.length,
            data: data.splice(offset, 6)
        }
    }, [page, blog, blogState.keyword])

    useEffect(() => {
        setPage(1)
    }, [blogState.keyword])

    return ( 
      <>
        {isLoading ? <p>Loading ...</p> : (
            <>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {dataBlogs.data.map((item: any, index: number) => (
                        <BlogItem
                            key={index}
                            title={item.title}
                            date={item.publishedAt}
                            desc={item.description}
                            image={item.urlToImage}
                        />
                    ))}
                </div>
                <BlogPagination page={page} setPage={setPage} total={dataBlogs.total} />
            </>
        )}
      </>
     );
}

export default Blog;
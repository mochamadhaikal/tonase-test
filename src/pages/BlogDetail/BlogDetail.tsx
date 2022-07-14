import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

import { Text, H1 } from '@components/ui'
import ArrowRight from '@components/icons/ArrowRight'
import { isJsonString, wordSlice, getRandomArbitrary } from '@utils/textFormatter'

import BlogItem from "../Blog/BlogItem"

function BlogDetail({ id }: { id: string }) {
    const [isLoading, setIsLoading] = useState(true)
    const [detail, setDetail] = useState<any>({})

    const { replace } = useRouter()
    const handleNoValid = () => {
        localStorage.removeItem('news')
        replace('/')
    }

    useEffect(() => {
        if(id !== undefined) {
            const dataBlogs = localStorage.getItem('news')
            if(dataBlogs && isJsonString(dataBlogs) && +id !== NaN) {
                const dataBlogsJSON = JSON.parse(dataBlogs)

                if(dataBlogsJSON[+id - 1]) {
                    setIsLoading(false)
                    setDetail(dataBlogsJSON[+id - 1])
                } else {
                    handleNoValid()
                }
            } else {
                handleNoValid()
            }
        }
    }, [id])

    const dataBlogs = useMemo(() => {
        if(typeof window !== 'undefined') {
            const fx = localStorage.getItem('news')
            if(fx && isJsonString(fx)) {
                const dataBlogsJSON = JSON.parse(fx)
    
                return dataBlogsJSON
            }
        }
    }, [id])

    const getIndexRandom = useMemo(() => {
        const one = Math.floor(getRandomArbitrary(0,30))
        let two = Math.floor(getRandomArbitrary(0,30))

        if(two === one) {
            if(two < 20) {
                two++
            } else {
                two--
            }
        }
        return [one, two]
    }, [id])

    return (
        <div className="my-10">
            {isLoading ?  <p>Loading ...</p> : (
                <>
                    <div className="flex items-center gap-3">
                        <Text isOrange>Article</Text>
                        <ArrowRight style={{ height: 12, width: 6.5 }} />
                        <Text isFaded>{wordSlice({ word: detail?.title || '', totalWord: 15 })}</Text>
                    </div>
                    <H1 className="text-2xl my-3">{detail?.title || ''}</H1>
                    <Text isFaded>
                        {`
                            Dipost oleh ${detail.author || ''} 
                            - ${dayjs(detail.publishedAt).format('DD MMMM YYYY HH:MM')} WIB
                        `}
                    </Text>
                    <img src={detail.urlToImage} className="w-full mt-4 rounded-md" />
                    <Text className='mt-3'>
                        {detail.content}
                    </Text>
                    <Text className='mt-2'>
                        {detail.description}
                    </Text>
                    <H1 className="text-2xl mt-10 mb-1.5">SIMILIAR</H1>

                    <div className="flex flex-wrap justify-between">
                        <BlogItem
                            id={getIndexRandom[0] + 1}
                            title={dataBlogs[getIndexRandom[0]].title}
                            date={dataBlogs[getIndexRandom[0]].publishedAt}
                            desc={dataBlogs[getIndexRandom[0]].description}
                            image={dataBlogs[getIndexRandom[0]].urlToImage}
                        />
                        <BlogItem
                            id={getIndexRandom[1] + 1}
                            title={dataBlogs[getIndexRandom[1]].title}
                            date={dataBlogs[getIndexRandom[1]].publishedAt}
                            desc={dataBlogs[getIndexRandom[1]].description}
                            image={dataBlogs[getIndexRandom[1]].urlToImage}
                        />
                    </div>
                    
                </>
            )}
        </div>
    )
}

export default BlogDetail
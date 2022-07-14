import dayjs from 'dayjs'
import { useRouter } from 'next/router'

import { Text } from '@components/ui'
import { wordSlice } from '@utils/textFormatter'

interface IBlogItem {
  title: string
  date: string
  desc: string
  image: string
  id: number
}

function BlogItem({
    title,
    date,
    desc,
    image,
    id
  }:IBlogItem) {
    const { push } = useRouter()

  const handleClick = () => {
    push(`/${id}`)
  }

  return (
    <div className="mb-10 cursor-pointer" style={{ width: '45%' }} onClick={handleClick}>
        <img className="w-full rounded-md" style={{ height: 230 }} src={image} />
        <Text className="text-xl mt-5 mb-1">{wordSlice({ word: title, totalWord: 10 })}</Text>
        <Text isFaded className="text-sm my-3">{dayjs(date).format('DD MMMM YYYY')}</Text>
        <Text isFaded className="text-sm">{wordSlice({ word: desc, totalWord: 20})}</Text>
        <Text className="mt-2 cursor-pointer" isOrange>Read More</Text>
    </div>
  )
}

export default BlogItem

import dayjs from 'dayjs'

import { Text } from '@components/ui'
import { wordSlice } from '@utils/textFormatter'

interface IBlogItem {
  title: string
  date: string
  desc: string
  image: string
}

function BlogItem({
    title,
    date,
    desc,
    image
  }:IBlogItem) {
  return (
    <div className="mb-10" style={{ width: '45%' }}>
        <img className="w-full rounded-md" style={{ height: 230 }} src={image} />
        <Text className="text-xl mt-5 mb-1">{wordSlice({ word: title, totalWord: 10 })}</Text>
        <Text isFaded className="text-sm my-3">{dayjs(date).format('DD MMMM YYYY')}</Text>
        <Text isFaded className="text-sm">{wordSlice({ word: desc, totalWord: 20})}</Text>
        <Text className="mt-2 cursor-pointer" isOrange>Read More</Text>
    </div>
  )
}

export default BlogItem

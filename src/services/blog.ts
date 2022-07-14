import axios from "axios";

const URL = 'https://newsapi.org/v2/everything?apiKey=f957b14dc5334638b631aa603d6e9f71'

export const getBlog = async () => {
  const response = await axios.get(URL, {
    params: {
      sortBy: 'publishedAt',
      from: '2022-06-13',
      q: 'color'
    }
  })
  
  if (!response.status) {
    throw new Error("Fetching Error");
  }

  const data = await response.data?.articles?.splice(0,30)
  
  return data || ''
}
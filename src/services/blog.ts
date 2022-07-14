import axios from "axios";

const URL = 'https://newsapi.org/v2/everything?apiKey=53a9a9f01bb546319132d90da36ef5bc'

export const getBlog = async () => {
  const response = await axios.get(URL, {
    params: {
      sortBy: 'publishedAt',
      from: '2022-06-20',
      q: 'color'
    }
  })
  
  if (!response.status) {
    throw new Error("Fetching Error");
  }

  const data = await response.data?.articles?.splice(0,30)

  localStorage.setItem('news', JSON.stringify(data || []))
  
  return data || []
}
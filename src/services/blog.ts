import axios from "axios";

const URL =
  "https://newsapi.org/v2/top-headlines?apiKey=f957b14dc5334638b631aa603d6e9f71";

export const getBlog = async () => {
  const response = await axios.get(URL, {
    params: {
      country:"us",
      category:"business",
    },
  });

  if (!response.status) {
    throw new Error("Fetching Error");
  }

  const data = await response.data?.articles?.splice(0, 30);

  localStorage.setItem("news", JSON.stringify(data || []));

  return data || [];
};

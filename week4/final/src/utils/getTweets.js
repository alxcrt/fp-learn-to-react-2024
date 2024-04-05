import API_URL from "./API_URL";

//mock API call
export const fetchTweets = async () => {
  const response = await fetch(`${API_URL}/tweets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.tweets;
};

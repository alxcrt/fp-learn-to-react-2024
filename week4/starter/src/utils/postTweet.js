import API_URL from "./API_URL";

export const postTweet = async (tweet, token) => {
  await fetch(`${API_URL}/tweet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content: tweet }),
  });
};

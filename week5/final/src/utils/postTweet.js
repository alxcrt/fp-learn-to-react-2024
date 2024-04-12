import API_URL from "./API_URL";

//mock API call
export const postTweet = async (tweet, token) => {
  try {
    await fetch(`${API_URL}/tweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: tweet }),
    });
  } catch (error) {
    throw error;
  }
};

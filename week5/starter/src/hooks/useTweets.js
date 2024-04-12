import { useEffect, useState } from "react";
import { fetchTweets } from "../utils/getTweets";
import API_URL from "../utils/API_URL";
import { postTweet } from "../utils/postTweet";

export const useTweets = (token) => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/tweets`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLoading(false);
      return data.tweets;
    } catch (error) {
      setError(error[0].message);
      console.error(error);
    }
  };

  const fetchData = async () => {
    const response = await fetchTweets();
    setTweets(response);
  };

  const post = async (tweet) => {
    try {
      await postTweet(tweet, token);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { tweets, post, loading, error };
};

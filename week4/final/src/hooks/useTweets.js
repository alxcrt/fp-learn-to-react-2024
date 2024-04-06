import { useState, useEffect } from "react";
import { fetchTweets } from "../utils/getTweets";
import API_URL from "../utils/API_URL";
import { postTweet } from "../utils/postTweet";

export const useTweets = (token) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTweets = async () => {
    setLoading(true);
    setError("");
    try {
      //   const response = await fetch(`${API_URL}/tweets`, {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   const data = await response.json();
      //   console.log("data", data);

      const data = await fetchTweets();
      setTweets(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
      console.error(e.message);
    }
  };

  const handlePostTweet = async (tweet) => {
    // await fetch(`${API_URL}/tweet`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ content: tweet }),
    //   })
    await postTweet(tweet, token);
    getTweets();
  };

  const startPolling = (cb, i) => {
    cb();
    const pollingInterval = setInterval(cb, i);
    return pollingInterval;
  };

  useEffect(() => {
    // const pollingId = startPolling(getTweets, 1000);
    getTweets();
    // return () => {
    //   clearInterval(pollingId);
    // };
  }, []);

  return { tweets, loading, error, handlePostTweet };
};

import { useState, useEffect } from "react";
import styled from "styled-components";
import CreatePostForm from "../CreatePostForm";
import Tweet from "../Tweet";
import styles from "./Home.module.css";
import { fetchTweets } from "../../utils/getTweets";
import LoadingSpinner from "../LoadingSpinner";
import LoginForm from "../LoginForm";
import { postTweet } from "../../utils/postTweet";
import { useTweets } from "../../hooks/useTweets";

const Feed = styled.div`
  max-width: 42rem;
  width: 100%;
  border-left: 1px solid #475569;
  border-right: 1px solid #475569;
  max-width: 672px;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  // const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const { tweets, loading, error, handlePostTweet } = useTweets(token);

  return (
    <main className={styles.home}>
      <Feed>
        <div className="border-b border-slate-400 p-4">
          {user ? (
            <CreatePostForm postTweet={handlePostTweet} user={user} />
          ) : (
            <LoginForm setUser={setUser} setToken={setToken} />
          )}
        </div>
        <div className="flex flex-col justify-center align-middle place-items-center">
          {error && (
            <span style={{ fontSize: "18px", color: "red" }}>{error}</span>
          )}
          {loading && <LoadingSpinner />}
        </div>
        {!!tweets.length && (
          <div className="flex flex-col overflow-y-scroll grow">
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        )}
      </Feed>
    </main>
  );
}

import { useState, useEffect } from "react";
import styled from "styled-components";
import CreatePostForm from "../../components/CreatePostForm";
import Tweet from "../../components/Tweet";
import styles from "./Home.module.css";
import { fetchTweets } from "../../utils/getTweets";
import LoadingSpinner from "../../components/LoadingSpinner";
import LoginForm from "../../components/LoginForm";
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
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const { tweets, post, loading, error } = useTweets(token);

  return (
    <main className={styles.home}>
      <Feed>
        <div className="border-b border-slate-400 p-4">
          {user ? (
            <CreatePostForm postTweet={post} user={user} />
          ) : (
            <LoginForm setUser={setUser} setToken={setToken} />
          )}
        </div>
        {error ? (
          <div className="bg-red-500 p-4 text-white">{error}</div>
        ) : null}
        {tweets.length ? (
          <div className="flex flex-col overflow-y-scroll grow">
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </Feed>
    </main>
  );
}

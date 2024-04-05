import { useState, useEffect } from "react";
import styled from "styled-components";
import CreatePostForm from "../CreatePostForm";
import Tweet from "../Tweet";
import styles from "./Home.module.css";
import { fetchTweets } from "../../utils/getTweets";
import LoadingSpinner from "../LoadingSpinner";
import LoginForm from "../LoginForm";

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
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    const response = await fetchTweets();
    setTweets(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.home}>
      <Feed>
        <div className="border-b border-slate-400 p-4">
          {user ? (
            <CreatePostForm postTweet={setTweets} />
          ) : (
            <LoginForm setUser={setUser} />
          )}
        </div>
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

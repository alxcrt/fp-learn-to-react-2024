import { useState, useEffect } from "react";
import styled from "styled-components";
import CreatePostForm from "../CreatePostForm";
import Tweet from "../Tweet";
import styles from "./Home.module.css";
import { fetchTweets } from "../../utils/getTweets";

const Feed = styled.div`
  max-width: 42rem;
  width: 100%;
  border-left: 1px solid #475569;
  border-right: 1px solid #475569;
  max-width: 672px;
`;

export default function Home() {
  const [tweets, setTweets] = useState([]);

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
          <CreatePostForm postTweet={setTweets} />
        </div>
        <div className="flex flex-col">
          {tweets.length ? (
            tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Feed>
    </main>
  );
}

// const BadStopWatch = () => {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     setInterval(() => setTime((p) => p + 0.1), 100);
//   }, []);

//   return (
//     <div className="m-2">
//       <p>BadStopWatch : {time.toFixed(1)}</p>
//     </div>
//   );
// };
// const GoodStopWatch = () => {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => setTime((p) => p + 0.1), 100);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="m-2">
//       <p>GoodStopWatch : {time.toFixed(1)}</p>
//     </div>
//   );
// };

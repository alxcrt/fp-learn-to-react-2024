import styled from "styled-components";
import CreatePostForm from "../CreatePostForm";
import Tweet from "../Tweet";
import styles from "./Home.module.css";
import { tweets } from "../../utils/tweets";
import { fetchTweets } from "../../utils/getTweets";
import { useEffect, useState } from "react";

const Feed = styled.div`
  max-width: 42rem;
  width: 100%;
  border-left: 1px solid #475569;
  border-right: 1px solid #475569;
  max-width: 672px;
`;

export default function Home() {
  return (
    <main className={styles.home}>
      <Feed>
        <div className="border-b border-slate-400 p-4">
          <CreatePostForm />
        </div>
        {
          <div className="flex flex-col">
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        }
      </Feed>
    </main>
  );
}

// const BadStopWatch = () => {
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setCounter((c) => c + 0.1);
//     }, 100);
//   }, []);
//   return (
//     <>
//       <p>BadStopWatch: {counter.toFixed(1)} s</p>
//     </>
//   );
// };

// const GoodStopWatch = () => {
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCounter((c) => c + 0.1);
//     }, 100);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <p>GoodStopWatch: {counter.toFixed(1)} s</p>
//     </>
//   );
// };

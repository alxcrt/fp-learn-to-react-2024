import styled from "styled-components";
import { tweets } from "../../utils/tweets";
import CreatePostForm from "../CreatePostForm";
import Tweet from "../Tweet";
import styles from "./Home.module.css";

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
        <div className="flex flex-col">
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </Feed>
    </main>
  );
}

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useMemo, memo } from "react";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);

function Tweet({ tweet }) {
  const relativeTime = useMemo(() => dayjs(tweet.createdAt).fromNow());

  return (
    <div
      key={tweet.id}
      className="flex items-center gap-3 border-b border-slate-400 p-4"
    >
      <Link to={`/${tweet.author.name}`}>
        <img
          src={tweet.author.avatar}
          alt=""
          className="h-14 w-14 rounded-full"
        />
      </Link>
      <div className="flex flex-col">
        <span className="font-bold text-slate-300">
          {`@${tweet.author.name}`} ·{" "}
          <span className="font-thin">{relativeTime}</span>
        </span>
        <span>{tweet.content}</span>
      </div>
    </div>
  );
}

export default memo(Tweet);

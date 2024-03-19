import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Tweet({ tweet }) {
  return (
    <div
      key={tweet.id}
      className="flex items-center gap-3 border-b border-slate-400 p-4"
    >
      <img src={tweet.avatar} alt="" className="h-14 w-14 rounded-full" />
      <div className="flex flex-col">
        <span className="font-bold text-slate-300">
          {`@${tweet.name}`} ·{" "}
          <span className="font-thin">{dayjs(tweet.createdAt).fromNow()}</span>
        </span>
        <span>{tweet.tweet}</span>
      </div>
    </div>
  );
}

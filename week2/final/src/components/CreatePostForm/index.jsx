import { tweets } from "../../utils/tweets";

export default function CreatePostForm() {
  return (
    <div className="flex gap-4">
      <img
        src={tweets[0].avatar}
        alt="avatar"
        className="h-14 w-14 rounded-full"
      />
      <input
        type="text"
        placeholder="What's happening?"
        className="w-full border-0 bg-transparent outline-none"
      />
    </div>
  );
}

import { useState } from "react";
import { tweets } from "../../utils/tweets";

export default function CreatePostForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputState) return;
    const payload = {
      id: new Date().getTime(),
      username: "kentcdodds",
      name: "Kent C. Dodds",
      tweet: inputState,
      avatar: "https://i.pravatar.cc/150?img=1",
      createdAt: new Date().toISOString(),
    };
    postTweet((p) => [payload, ...p]);
    setInputState("");
  };
  return (
    <div className="flex gap-4 ">
      <img
        src={tweets[0].avatar}
        alt="avatar"
        className="h-14 w-14 rounded-full"
      />
      <input
        type="text"
        placeholder="What's happening?"
        className="w-full border-0 bg-transparent outline-none"
        // onChange={handleInputChange}
        // value={inputState}
      />
      {/* <button
        className="bg-cyan-400 rounded-full px-2 py-0 h-9 w-24 text-black self-center cursor-pointer hover:bg-cyan-300"
        onClick={handleSubmit}
      >
        Post
      </button> */}
    </div>
  );
}

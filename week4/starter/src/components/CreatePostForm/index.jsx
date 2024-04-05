import { useState, useRef, useEffect, useCallback } from "react";

import { tweets } from "../../utils/tweets";
import TextInput from "../TextInput/TextInput";

export default function CreatePostForm({ postTweet }) {
  const [inputState, setInputState] = useState("");

  //we initialize the inputRef
  const inputRef = useRef(null);

  //we use useEffect to focus on the inputRef when the component mounts
  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      setInputState(e.target.value);
    },
    [inputState]
  );

  const handleSubmit = () => {
    // e.preventDefault();
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
      <TextInput
        ref={inputRef} //we pass the inputRef to the TextInput component
        // here we have another way to get the element we want, without
        // using useRef  👇🏼

        // ref={(input) => {
        // 	if (!input) return;
        // 	input.focus();
        // }}
        type="text"
        placeholder="Type some emojis!"
        className="w-full border-0 bg-transparent outline-none flex-1"
        onChange={handleInputChange}
        value={inputState}
        onSubmit={handleSubmit}
      />
      <button
        className="bg-cyan-400 rounded-full px-2 py-0 h-9 w-24 text-black self-center cursor-pointer hover:bg-cyan-300 "
        onClick={handleSubmit}
        disabled={!inputState}
        style={{ cursor: !inputState ? "not-allowed" : "pointer" }}
      >
        Post
      </button>
    </div>
  );
}

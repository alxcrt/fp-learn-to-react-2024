import React, { useState } from "react";

export default function LoginForm({ setUser }) {
  const [inputState, setInputState] = useState("");

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border-0 bg-transparent outline-none flex-1"
        onChange={(e) => setInputState(e.target.value)}
      />

      <button
        className="border border-slate-400 rounded-md p-2 bg-slate-400 text-white"
        onClick={() => setUser({ username: "kentcdodds" })}
        disabled={!inputState}
      >
        Log in
      </button>
    </div>
  );
}

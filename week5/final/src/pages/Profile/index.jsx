import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../../utils/API_URL";
import Tweet from "../../components/Tweet";

export default function Profile() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(`${API_URL}/user?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      setUser(data.user);
    } else {
      navigate("/404");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <main className="h-screen flex justify-center">
      <div className="max-w-2xl w-full border-l border-r border-slate-400 flex flex-col">
        <div>
          <div className="bg-slate-500 h-36 relative ">
            <img
              src={user.avatar}
              alt=""
              className="h-32 w-32 bottom-0 left-0 absolute -mb-[64px] ml-4 rounded-full border-4 border-black"
            />
          </div>
          <div className="h-[64px]"></div>
          <div className="p-4 border-b border-slate-400">
            <h2 className="text-2xl font-bold">@{user.name}</h2>
          </div>
        </div>
        <div className="flex flex-col overflow-y-scroll grow">
          {user?.posts?.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </main>
  );
}

import { tweets } from "./tweets";
import API_URL from "./API_URL";

//mock API call
export const fetchTweets = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tweets);
    }, 2500);
  });
};

// Uncomment the code below and delete the code above to fetch data from the server
// export const fetchTweets = async () => {
//   const response = await fetch(`${API_URL}/tweets`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data.tweets;
// };

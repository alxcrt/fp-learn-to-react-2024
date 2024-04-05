import { tweets } from "./tweets";

//mock API call
export const fetchTweets = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(tweets)
    },2500)
  })
}


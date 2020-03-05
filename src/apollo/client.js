import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
  uri: "https://motionwares-hire-api.appspot.com/graphql",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTU3ODI4N2JmZGE0NjAwMWI3ZjUwZWQiLCJibG9nQWRtaW4iOmZhbHNlLCJibG9nU3VwZXJBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgyNzkzMzUxLCJleHAiOjE1ODUzODUzNTF9.3cHJWzGbdW8hr6d-nHZl-rWlHuhEQCYRdyak0l0FYMs"
  },
  fetch
});

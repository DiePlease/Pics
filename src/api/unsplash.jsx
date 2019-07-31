import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e3964ac1bb8682f404764674ef5365f7b0ea74f2f5272ddb71150be2b3777754"
  }
});

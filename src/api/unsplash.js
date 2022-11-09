import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -aIQty-frXpPTMIV6sdbYgaWJ2t1JYisX5-ptNlpEio",
  },
});

import axios from "axios";


export default axios.create({
  baseURL: "http://e-judiciary/api/v1/",
  headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  },
)
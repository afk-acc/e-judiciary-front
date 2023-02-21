import axios from "axios";


export default axios.create({
  baseURL: "http://192.168.100.6/api/v1/",
  headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  },
)
import axios from "axios";

export function getUser() {
  return axios.get("https://randomuser.me/api");
}

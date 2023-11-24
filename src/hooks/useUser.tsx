import { useEffect, useState } from "react";
import axios from "axios";
import { GitHubUser } from "../typings/types";

function useUser(username: string): GitHubUser {
  const [user, setUser] = useState<GitHubUser>({} as GitHubUser);
  const fetchUser = async (username: string) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    setUser(response.data);
  };
  useEffect(() => {
    fetchUser(username);
  }, []);
  return user;
}

export default useUser;

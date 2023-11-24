import { useEffect, useState } from "react";
import axios from "axios";

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

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
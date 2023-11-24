import axios from "axios";
import React, { useState } from "react";
import { createContext } from "use-context-selector";
import { GitHubIssue } from "../typings/types";

interface PostProviderProps {
  children: React.ReactNode;
}

interface PostContextType {
  posts: Array<GitHubIssue>;
}

export const PostContext = createContext({} as PostContextType);

function PostProvider(props: PostProviderProps) {
  const { children } = props;
  const [posts, setPosts] = useState<Array<GitHubIssue>>([]);
  const repo = "conniepaula/github-blog";

  const fetchPosts = async (query: string = "") => {
    const response = await axios.get(`https://api.github.com/search/issues`, {
      params: {
        q: `${query || ""} repo:${repo}`,
        sort: "updated",
        order: "desc",
      },
    });
    console.log(response.data);
    setPosts(response.data.items);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}

export default PostProvider;

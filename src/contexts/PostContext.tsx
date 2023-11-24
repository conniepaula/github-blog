import axios from "axios";
import React, { useState } from "react";
import { createContext } from "use-context-selector";

interface PostProviderProps {
  children: React.ReactNode;
}

interface PostContextType {
  posts: Array<Post>;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostContext = createContext({} as PostContextType);

function PostProvider(props: PostProviderProps) {
  const { children } = props;
  const [posts, setPosts] = useState<Array<Post>>([]);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    response.data;
    console.log(response.data);
    setPosts(response.data);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}

export default PostProvider;

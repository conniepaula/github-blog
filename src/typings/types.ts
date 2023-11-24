interface BaseGitHubUser {
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
}

export interface GitHubUser extends BaseGitHubUser {
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

export interface GitHubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: BaseGitHubUser;
  labels: {
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
  }[];
  state: string;
  assignee: null | BaseGitHubUser;
  body: string;
}

export interface GitHubSearch {
  total_count: number;
  incomplete_results: boolean;
  items: Array<GitHubIssue>;
  milestone: {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    node_id: string;
    number: number;
    state: string;
    title: string;
    description: string;
    creator: BaseGitHubUser;
    open_issues: number;
    closed_issues: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    due_on: string;
  };
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  pull_request: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
  body: string;
  score: number;
  locked: boolean;
  author_association: string;
  state_reason: string;
}
[];

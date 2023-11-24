import { Buildings, GithubLogo, PersonSimple } from "@phosphor-icons/react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import useUser from "../hooks/useUser";
import { useContextSelector } from "use-context-selector";
import { PostContext } from "../contexts/PostContext";

function Home() {
  const { login, company, followers, bio, name } = useUser("conniepaula");

  const posts = useContextSelector(PostContext, (context) => context.posts);

  return (
    <div className="flex flex-col items-center gap-10">
        <Card.Container featured={true}>
          <Card.Image
            src="https://avatars.githubusercontent.com/u/105062735?v=4"
            alt="User profile picture"
          />
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Card.Title>{name}</Card.Title>
            <Card.Description>{bio}</Card.Description>
            <Card.DataContainer>
              <Card.Data icon={<GithubLogo />} title={login} />
              <Card.Data icon={<Buildings />} title={company} />
              <Card.Data
                icon={<PersonSimple />}
                title={`${followers} followers`}
              />
            </Card.DataContainer>
          </div>
        </Card.Container>
      <section>

      <SearchBar />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mt-10">
        {posts.map((post) => (
          <Card.Container key={post.id}>
            <div className="flex w-full items-start justify-between">
              <Card.Subtitle>{post.title}</Card.Subtitle>
              <Card.Text>
                <div className="whitespace-nowrap">1 day ago</div>
              </Card.Text>
            </div>
            <Card.Description>{post.body}</Card.Description>
          </Card.Container>
        ))}
      </div>
        </section>
    </div>
  );
}

export default Home;

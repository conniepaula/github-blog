import { GithubLogo } from "@phosphor-icons/react";
import Details from "../components/Details";

function Home() {
  return (
    <div>
      <Details.Container>
        <Details.Image
          src="https://avatars.githubusercontent.com/u/105062735?v=4"
          alt="User profile picture"
        />
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Details.Title>Connie Paula</Details.Title>
          <Details.Description>
            Nulla sunt sit cupidatat sit sunt cillum non non ad. Quis cillum ut
            non id qui culpa sunt cillum nisi non labore. Nostrud aute
            exercitation ea et tempor commodo non id do.
          </Details.Description>
          <Details.DataContainer>
            <Details.Data icon={<GithubLogo />} title="Followers" />
            <Details.Data icon={<GithubLogo />} title="Followers" />
            <Details.Data icon={<GithubLogo />} title="Followers" />
          </Details.DataContainer>
        </div>
      </Details.Container>
    </div>
  );
}

export default Home;

import { Resolvers } from "../__generated__/resolvers-types";

const queries: Resolvers = {
  Query: {
    hello: () => "world",
    gitHubRepos: async () => {
      const response = await fetch(
        "https://api.github.com/users/Bastiani/repos",
        {
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            "X-GitHub-Api-Version": "2022-11-28",
            Accept: "application/vnd.github+json",
          },
        }
      );
      return response.json();
    },
  },
};

export default queries;

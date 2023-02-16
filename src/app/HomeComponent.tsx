"use client";

import { gql, useQuery } from "@apollo/client";
import { Query } from "@/__generated__/resolvers-types";

const HomeComponent = () => {
  const { data, loading, error } = useQuery<Query>(gql`
    query Hello {
      hello
      gitHubRepos {
        id
        name
      }
    }
  `);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  if (data) {
    return (
      <>
        <pre>{JSON.stringify(data.hello, null, 2)}</pre>
        <ul style={{ margin: "30px" }}>
          {data.gitHubRepos?.map((repo, index: number) => (
            <li key={`repo+${index}`}>{repo?.name}</li>
          ))}
        </ul>
      </>
    );
  }

  return <h1>Home Page</h1>;
};

export default HomeComponent;

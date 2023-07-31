"use client";

import { gql, useQuery } from "@apollo/client";
import { Query } from "@/__generated__/resolvers-types";

import { Button } from "@/components/Button";

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
      <div className="p-2">
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Save changes
        </button>
        <Button color="test">Save changes</Button>
        <Button color="test1">Save changes</Button>
        <Button color="test2" size="lg">
          Save changes
        </Button>
        <pre>{JSON.stringify(data.hello, null, 2)}</pre>
        <ul style={{ margin: "30px" }}>
          {data.gitHubRepos?.map((repo, index: number) => (
            <li key={`repo+${index}`}>{repo?.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <h1>Home Page</h1>;
};

export default HomeComponent;

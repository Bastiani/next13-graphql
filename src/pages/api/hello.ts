// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { readFileSync } from "fs";
import path from "path";

import queries from "../../resolvers/queries";

const schemaDirectory = path.resolve(process.cwd(), "src/pages/api/schema");
const typeDefs = readFileSync(
  path.join(schemaDirectory, "schema.graphql"),
  "utf8"
);

const server = new ApolloServer({
  resolvers: { ...queries },
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => ({ req, res }),
});

import { randomBytes } from "crypto";
import { quotes, users } from "../service/fakeDb.js";

const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((userdata) => userdata.id == args.id),
    quotes: () => quotes,
    userQuote: (_, args) => quotes.filter((userQote) => userQote.by == args.by),
  },
  User: {
    quotes: (usr) => quotes.filter((quote) => quote.by == usr.id),
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const id = randomBytes(5).toString("hex");

      users.push({
        id,
        ...userNew,
      });

      return await users.find((user) => user.id == id);
    },
  },
};

export { resolvers };

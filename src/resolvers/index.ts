import Query from "./Queries";
import Mutation from "./Mutations";
import GamePayload from './Game';
import AuthorPayload from './Author';
import ReviewPayload from "./Review";


const resolvers = {
    Query,
    Mutation,
    GamePayload,
    AuthorPayload,
    ReviewPayload
};

export default resolvers;
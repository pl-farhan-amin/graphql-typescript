import { AUTHORS, GAMES, REVIEWS } from "../common/constants"
import { AuthorPayload, GamePayload, HelloPayload, QueryGetAuthorByIdArgs, QueryGetGameByIdArgs, QueryGetReviewByIdArgs, ReviewPayload } from "../generated/types"

export const hello = (): HelloPayload => {
    return {
        text: 'Hello World Farhan Love You! much'
    }
}

export const game = (): GamePayload[] => {
    return GAMES;
}

export const author = (): AuthorPayload[] => {
    return AUTHORS;
}

export const review = (): ReviewPayload[] => {
    return REVIEWS;
}

export const getReviewById = (_: unknown, args: QueryGetReviewByIdArgs): ReviewPayload | undefined => {
    return REVIEWS.find((review) => review.id === args.id)
}

export const getAuthorById = (_: unknown, args: QueryGetAuthorByIdArgs): AuthorPayload | undefined => {
    return AUTHORS.find((author) => author.id === args.id);
}

export const getGameById = (_: unknown, args: QueryGetGameByIdArgs): GamePayload | undefined => {
    return GAMES.find((game) => game.id === args.id);
}
import { AUTHORS, GAMES } from "../common/constants";
import { ReviewPayload } from "../generated/types";

export const game = (parent: ReviewPayload) => {
    return GAMES.find((game) => game.id === parent.gameId);
}

export const author = (parent: ReviewPayload) => {
    return AUTHORS.find((author) => author.id === parent.authorId);
}
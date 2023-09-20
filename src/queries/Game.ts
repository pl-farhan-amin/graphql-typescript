import { REVIEWS } from "../common/constants";
import { GamePayload } from "../generated/types";

export const reviews = (parent: GamePayload) => {
    return REVIEWS.filter((review) => review.gameId === parent.id)
}
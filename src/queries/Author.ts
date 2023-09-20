import { REVIEWS } from "../common/constants";
import { AuthorPayload } from "../generated/types";

export const reviews = (parent: AuthorPayload) => {
    return REVIEWS.filter((review) => review.authorId === parent.id);
}
import { GAMES } from "../common/constants";
import { GamePayload, MutationAddGameArgs, MutationDeleteGameArgs, MutationUpdateGameArgs } from "../generated/types";

export const addGame = (_: unknown,args: MutationAddGameArgs): GamePayload => {
    const game = {
        ...args.input,
        id: Math.floor(Math.random() * 1000).toString()
    };
    GAMES.push({...game});
    return game;
}

export const deleteGame = (_: unknown,args: MutationDeleteGameArgs): GamePayload[] => {
    const { id } = args;
    return GAMES.filter((game) => game?.id !== id);
}

export const updateGame = (_: unknown,args: MutationUpdateGameArgs): GamePayload | undefined=> {
    const Games = (GAMES.map((game) => {
        if(game?.id === args.input.id){
            return {...args.input}
        }
        return game;
    }))?.find((game) => game?.id === args.input?.id);
    return Games;
}

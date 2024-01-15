import { startNewGame } from "../../src/app/startNewGame";
import { mockedAxios } from "../mocks/axios";

describe('This is a component testsuite for a piece of functionality that should be able to start a new game of CheeseEggsAndButter, or something in an other order.', () => {
    describe('The first part of this functionality is to start a new game, by calling the API of the backend', () => {
        it('When the function to start a new game is invoked, the API returns the ID of the new game', () => {
            const outputStartNewGame = startNewGame();

            expect(mockedAxios.post).toHaveBeenCalledTimes(1);
            expect(outputStartNewGame).toBe('1234');
        });
    });
});
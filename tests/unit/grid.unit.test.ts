import { callAPItoStartNewGame } from "../../src/app/startNewGame";
import { mockedAxios } from "../mocks/axios";

describe('When starting a new game we call POST endpoint to do so', () => {
    it('When the function to call the API to start a new game is invoked, the API returns a 200 response and the ID of the new game', () => {
        const response = { Response: 200, data: { id: "1234" } };
        mockedAxios.post.mockResolvedValueOnce(response);
      
        const outputStartNewGame = callAPItoStartNewGame();
       
        expect(outputStartNewGame).toEqual(response);
    });
    it('But when something goes wrong we receive a 404 response', () => {
        const response = { Response: 404, data: { id: "" } };
        mockedAxios.post.mockResolvedValueOnce(response);

        const outputStartNewGame = callAPItoStartNewGame();

        expect(outputStartNewGame).toEqual(response);
    });
});
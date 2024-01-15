import axios from 'axios';

jest.mock('axios');

export const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.post.mockResolvedValue({
    data: {
        gameId: '1234567890'
    }
});
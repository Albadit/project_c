import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';

// Set up a mock server for handling API requests
const server = setupServer();

beforeAll(() => {
    // Enable API mocking before tests run
    server.listen();
});

afterEach(() => {
    // Reset any request handlers that are declared as a part of the test
    server.resetHandlers();
});

afterAll(() => {
    // Clean up once the tests are done
    server.close();
});
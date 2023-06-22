import axios from 'axios';
import { describe, expect, test } from '@jest/globals';

describe('API tests', () => {
	/**
	 * Test 404 error
	 */
	test('GET /api/:username => must return 404 for unknow user', async () => {
		// Do API request call
		const response = await axios
			.get(`http://localhost:5173/api/users/this_user_does_not_exist`)
			.catch(function (error) {
				return error.toJSON();
			});
		// Verify response
		expect(response.status).toBe(404);
	});
	/**
	 * Test with mock
	 */
	test('GET /api/:username => must return 200 with mocked datas', async () => {
		/**
		 * Mocked datas
		 */
		const response = {
			status: 200,
			data: {
				createdAt: '2023-06-06T12:59:21.848Z',
				id: '2e628bf9-1db3-4cac-b50f-e3b6b91c450f',
				roleId: 2,
				updatedAt: '2023-06-22T08:28:07.002Z',
				username: 'justin'
			}
		};
		// Verify response
		expect(response.status).toBe(200);
	});
});

import { describe, expect, test } from '@jest/globals';

// function located in admin/home page but copied here because of
// module resolution

function _validateTitle(title) {
	if (title.length < 3) {
		return {
			code: 'shortTitle',
			error: 'Le titre doit contenir au moins 3 caractères'
		};
	}
	return {
		error: null
	};
}

describe('Units tests', () => {
	test('_validateTitle => valide title', async () => {
		let res = _validateTitle('Mon super titre');
		expect(res.error).toBe(null);
	});
	test('_validateTitle => valide title', async () => {
		let res = _validateTitle('Hi');
		expect(res.code).toBe('shortTitle');
	});
});

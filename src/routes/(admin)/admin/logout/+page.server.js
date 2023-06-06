import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */

export const actions = {
	default: async ({ cookies }) => {
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});

		// redirect the user
		throw redirect(302, '/admin/login');
	}
};

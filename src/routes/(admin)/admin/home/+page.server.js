import { redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const load = async (serverloadEvent) => {
	let { locals } = serverloadEvent;
	if (!locals.user) {
		throw redirect(302, '/admin/login');
	}

	let { user } = locals;

	const response = await prisma.note.findMany({
		where: { userId: user.id }
	});

	// 2.
	return { feed: response };
};

/** @type {import('./$types').Actions} */

export const actions = {
	/**
	 * Create a new note
	 */
	note: async ({ request }) => {
		const data = await request.formData();

		const userId = data.get('userId');
		const title = data.get('title');
		const content = data.get('content');

		let validTitle = _validateTitle(title);

		if (validTitle.error) {
			return {
				status: 400,
				body: validTitle.error
			};
		}

		await prisma.note.create({
			data: {
				title: title,
				content: content,
				user: {
					connect: { id: userId }
				}
			}
		});
	}
};

export function _validateTitle(title) {
	if (title.length < 3) {
		return {
			error: 'Le titre doit contenir au moins 3 caractères'
		};
	}
	return {};
}

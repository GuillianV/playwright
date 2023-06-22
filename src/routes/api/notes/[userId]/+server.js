// import traductions from '$lib/lang/traductions.json'
import { json } from '@sveltejs/kit';
import { db } from '$lib/database';

export async function GET(req) {
	let { userId = null } = req.params;

	let notes = await db.note.findMany({
		where: {
			userId: userId
		}
	});

	if (notes == null) return new Response('Notes not found', { status: 404 });
	return json(notes);
}

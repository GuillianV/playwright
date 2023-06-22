// import traductions from '$lib/lang/traductions.json'
import { json } from '@sveltejs/kit';
import { db } from '$lib/database';

export async function POST(req) {
	let { title, content, userId } = req.body;
	let note = await db.note.create({
		data: {
			title,
			content,
			userId
		}
	});
	return json(note);
}

// import traductions from '$lib/lang/traductions.json'
import {json} from '@sveltejs/kit'
import { db } from '$lib/database'
export async function GET(req){
    
    let users = await db.user.findMany()
    return json(users) 
}


// import traductions from '$lib/lang/traductions.json'
import {json} from '@sveltejs/kit'
import { db } from '$lib/database'
export async function GET(req){
    

    let { username = null } = req.params
    
    let user = await db.user.findUnique({
        where: {
          username: username,
        },
      })

    if(user == null) return new Response("User not found", {status: 404})
    if(user.roleId == 1) return new Response("Permission denied", {status: 403})
    return json(user) 
}


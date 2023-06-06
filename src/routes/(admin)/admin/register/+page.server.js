import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import { db } from '$lib/database'


let Roles = {
  ADMIN : 'ADMIN',
  USER : 'USER',
}


/** @type {import('./$types').Actions} */

export const actions = {
    register: async (event) => {
      const request = event.request
      const data = await request.formData()
      const username = data.get('username')
      const password = data.get('password')
    
      if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        !username ||
        !password
      ) {
        return fail(400, { invalid: true })
      }
    
      const user = await db.user.findUnique({
        where: { username },
      })
    
      if (user) {
        return fail(400, { user: true })
      }
    
      await db.user.create({
        data: {
          username,
          passwordHash: await bcrypt.hash(password, 10),
          userAuthToken: crypto.randomUUID(),
          role: { connect: { name: Roles.USER } },
        },
      })
    
      throw redirect(303, '/admin/login')
    }
};


export const load = async (serverloadEvent) =>{
   
  let { locals } = serverloadEvent;
if (locals.user) {
  throw redirect(302, '/admin/home')
}

}
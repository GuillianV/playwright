
import { error,redirect } from '@sveltejs/kit';
export const load = async (serverloadEvent) =>{
   
    let { locals } = serverloadEvent;
    return {
        user: locals.user,
      }
  
}
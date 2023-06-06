<script >
    import { page } from '$app/stores'
    import H1 from '$lib/components/H1.svelte';
  </script>
  
  <svelte:head>
    <title>SvelteKit Admin</title>
  </svelte:head>
  
  <nav>
    {#if !$page.data.user}
      <a href="/admin/login">Login</a>
      <a href="/admin/register">Register</a>
    {/if}
  
    {#if $page.data.user}
    <H1 innerText="Welcome Home {$page.data.user.name}" />
  
      <form action="/admin/logout" method="POST">
        <button type="submit">Log out</button>
      </form>
    {/if}
  </nav>
  
  <main>
    <slot />
  </main>
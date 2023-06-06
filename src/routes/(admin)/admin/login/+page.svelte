<script>
    import H1 from '$lib/components/H1.svelte';

    export let form;
</script>

<H1 innerText="Login" />


<h1>Login</h1>

<form action="?/login" method="POST">
  <div>
    <label for="username">Username</label>
    <input label="username" id="username" name="username" type="text" required />
  </div>

  <div>
    <label for="password">Password</label>
    <input label="password" id="password" name="password" type="password" required />
  </div>

  {#if form?.invalid}
    <p class="error">Username and password is required.</p>
  {/if}

  {#if form?.credentials}
    <p class="error">You have entered the wrong credentials.</p>
  {/if}

  <button name="submit" type="submit">Log in</button>
</form>
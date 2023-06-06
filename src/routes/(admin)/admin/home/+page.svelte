<script>
    import H1 from '$lib/components/H1.svelte';
    import { page } from '$app/stores'

    console.log($page.data.user)
</script>

You are logged in Admin

<pre>
  {$page.data.user}
</pre>
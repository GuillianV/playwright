<script>
    import H1 from '$lib/components/H1.svelte';
    import Object from '$lib/components/Object.svelte';
    import { page } from '$app/stores'

    console.log($page.data.user)
</script>

<Object object={$page.data.user} />
You are logged in Admin



<script>
	import { page } from '$app/stores';
	import H1 from '$lib/components/H1.svelte';
</script>

<svelte:head>
	<title>SvelteKit Admin</title>
</svelte:head>

<nav>
	{#if !$page.data.user}
		<a href="/">Accueil</a>
		<a href="/admin/login">Login</a>
		<a href="/admin/register">Register</a>
	{/if}

	{#if $page.data.user}
		<div class="headerPage">
			<span class="title">Interface d'administration.</span>
			<div class="userBox">
				<h5 class="userName">{$page.data.user.name}</h5>
				<form action="/admin/logout" method="POST">
					<button type="submit">Déconnexion</button>
				</form>
			</div>
		</div>
	{/if}
</nav>

<main>
	<slot />
</main>

<style>
	.title {
		color: green;
		font-size: 30px;
	}

	.userName {
		color: white;
		margin-right: 10px;
	}

	.userBox {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.headerPage {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

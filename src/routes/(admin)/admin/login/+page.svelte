<script>
	import H1 from '$lib/components/H1.svelte';
	export let form;
</script>

<section class="mainContainer">
	<h1>Connexion à CRM Pro</h1>

	<div class="form">
		<form action="?/login" method="POST">
			<div class="inputContent">
				<label for="username">Nom d'utilisateur</label><br />
				<input aria-label="username" id="username" name="username" type="text" required />
			</div>
			<br />
			<div class="inputContent">
				<label for="password">Mot de passe</label><br />
				<input aria-label="password" id="password" name="password" type="password" required />
			</div>

			{#if form?.invalid}
				<p class="error">Username and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">Utilisateur ou mot de passe incorrect.</p>
			{/if}

			<button aria-label="submit" class="submitButton" name="submit" type="submit">Se connecter</button>
		</form>
	</div>
</section>

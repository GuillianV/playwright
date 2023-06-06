<script>
	import H1 from '$lib/components/H1.svelte';
	export let form;
</script>

<section class="mainContainer">
	<h1>S'enregistrer sur CRM Pro</h1>

	<div class="form">
		<form action="?/register" method="POST">
			<div>
				<label for="username">Nom d'utilisateur</label><br />
				<input id="username" name="username" type="text" required />
			</div>
			<br />
			<div>
				<label for="password">Mot de passe</label><br />
				<input id="password" name="password" type="password" required />
			</div>

			{#if form?.user}
				<p class="error">Utilisateur déjà utilisé.</p>
			{/if}

			<button class="submitButton" type="submit">S'enregistrer</button>
		</form>
	</div>
</section>

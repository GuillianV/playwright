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
<<<<<<< HEAD
				<input aria-label="username" id="username" name="username" type="text" required />
=======
				<input id="username" name="username" type="text" required />
>>>>>>> f9b3732ccd2c928279a9d0b91d8f8fcaed44c5dc
			</div>
			<br />
			<div>
				<label for="password">Mot de passe</label><br />
<<<<<<< HEAD
				<input aria-label="password" id="password" name="password" type="password" required />
=======
				<input id="password" name="password" type="password" required />
>>>>>>> f9b3732ccd2c928279a9d0b91d8f8fcaed44c5dc
			</div>

			{#if form?.user}
				<p class="error">Utilisateur déjà utilisé.</p>
			{/if}

<<<<<<< HEAD
			<button aria-label="submit" class="submitButton" name="Register" type="submit">S'enregistrer</button>
=======
			<button class="submitButton" name="Register" type="submit">S'enregistrer</button>
>>>>>>> f9b3732ccd2c928279a9d0b91d8f8fcaed44c5dc
		</form>
	</div>
</section>

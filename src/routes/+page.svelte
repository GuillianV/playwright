<script>
	import { goto } from '$app/navigation';
</script>

<div class="informations">
	<!-- svelte-ignore a11y-distracting-elements -->
	<marquee scrolldelay="1">
		<div class="scroll">
			<p><span class="strong">15/05/2003</span> - Vous pouvez désormais ajouter des clients !</p>
			<p><span class="strong">06/06/2003</span> - Bienvenue sur le site de CRM Pro !</p>
		</div>
	</marquee>
</div>

<div class="mainContainer">
	<h1>Bienvenue sur CRM Pro</h1>
	<h2>Le logiciel de gestion client n°1 sur le marché</h2>

	<div class="actions">
		<button
			class="buttonHome"
			on:click={() => {
				goto('/admin/login');
			}}
		>
			Se connecter
		</button>
		<button
			class="buttonHome registerButton"
			on:click={() => {
				goto('/admin/register');
			}}
		>
			S'inscrire
		</button>
	</div>
</div>

<footer>
	<p>© CRM Pro 2003, le cadenas en haut de la page indique que le site est sécurisé. 🔒</p>
</footer>

<style>
	.buttonHome {
		margin: 5px;
	}
</style>

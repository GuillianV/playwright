<script>
	import Object from '$lib/components/Object.svelte';
	import { page } from '$app/stores';

	export let data;
</script>

<!-- <Object object={$page.data.user} /> -->
<hr />
<h1>Notes : {data.feed.length}</h1>

{#each data.feed as note}
	<div class="noteContent">
		<h4>{note.title}</h4>
		<div>{note.content}</div>
	</div>
{/each}

<br />
<hr />
<h2>Nouvelle note</h2>
<div class="form">
	<form action="?/note" method="POST">
		<div class="inputContent">
			<input aria-label="userId" name="userId" type="hidden" value={$page.data.user.id} required />
		</div>
		<div class="inputContent">
			<label for="title">Title</label><br />
			<input aria-label="title" id="title" name="title" type="text" required />
		</div>
		<br />
		<div class="inputContent">
			<label for="content">Content</label><br />
			<textarea aria-label="content" id="content" name="content" type="content" required />
		</div>
		<button aria-label="submit" class="submitButton" name="submit" type="submit">Enregistrer</button
		>
	</form>
</div>

<style>
	.noteContent {
		margin-top: 20px;
	}
	.noteContent h4 {
		margin: 0;
		font-size: 20px;
		color: green;
	}

	.noteContent div {
		color: white;
	}
</style>

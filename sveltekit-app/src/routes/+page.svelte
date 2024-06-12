<script>
	import { onMount } from 'svelte';
	import '../../node_modules/@odevo/ui/src/styles/root-styles.css';
	import '../styles/base-styles.css';

	onMount(async () => {
		await import('@odevo/ui');
	});
</script>

<h1>Sveltekit</h1>
<odv-button />

<script>
	import { onMount } from 'svelte';
	import '../../node_modules/@odevo/ui/src/styles/root-styles.css';
	import '../styles/base-styles.css';

	onMount(async () => {
		await import('@odevo/ui');
	});
</script>

<odv-button />

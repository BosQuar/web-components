<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		await import('@odevo/ui');
	});
</script>

<odv-test />

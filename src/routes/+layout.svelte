<script>
	import Header from './Header.svelte';
	import './styles.css';
	import 'uno.css';
	import { onMount } from "svelte";
  
  let isDarkMode = false;

  const setDarkMode = (mediaQuery) => {
    isDarkMode = mediaQuery.matches;
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  onMount(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(darkMediaQuery);
    darkMediaQuery.addEventListener("change", setDarkMode);
  });
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>前端森林</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem 6rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

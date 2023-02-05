import { component$, useStyles$, useStore } from "@builder.io/qwik";
import { hotSites } from "~/utils/hotSites";
import style from "./index.scss?inline";

export default component$(() => {
	useStyles$(style);

	const store = useStore({
		hotSites,
	});

	return (
		<div class="hot-sites flex flex-wrap dark:bg-#18181a">
			{store.hotSites.map(site => (
				<a
					href={site.link}
					target="_blank"
					rel="noreferer"
					class="btn cursor-pointer m-5px dark:bg-#eee dark:text-black"
				>
					{site.name}
				</a>
			))}
		</div>
	);
});

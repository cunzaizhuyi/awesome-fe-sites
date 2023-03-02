import { component$, useStore } from "@builder.io/qwik";
import { allSites } from "~/utils/sites";
import OneSite from "./OneSite";
import CategoryTitle from "~/components/CategoryTitle";

export default component$(() => {
	const store = useStore({
		allSites,
	});

	return (
		<section class="all-sites">
			{store.allSites.map((list, index) => {
				return (
					<div class="site-block my-30px" key={index}>
						<CategoryTitle category={list}></CategoryTitle>
						{list.sites.map((site, secIndex) => (
							<OneSite site={site} key={secIndex} />
						))}
					</div>
				);
			})}
		</section>
	);
});

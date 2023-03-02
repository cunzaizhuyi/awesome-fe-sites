import { component$, useStyles$, useStore } from "@builder.io/qwik";
import { allSites } from "~/utils/sites";
import CardSite from "./CardSite";
import CategoryTitle from "~/components/CategoryTitle";
import ListStyle from "./List.css?inline";

export default component$(() => {
	useStyles$(ListStyle);
	const store = useStore({
		allSites,
	});

	return (
		<section class="all-sites">
			{store.allSites.map((list, index) => {
				return (
					<div class="site-block my-30px" key={index}>
						<CategoryTitle category={list} />
						<div class="item-wrapper">
							{list.sites.map((site, secIndex) => (
								<CardSite site={site} key={secIndex} />
							))}
						</div>
					</div>
				);
			})}
		</section>
	);
});

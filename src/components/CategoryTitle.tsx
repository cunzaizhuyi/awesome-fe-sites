import { component$ } from "@builder.io/qwik";
import type { Site } from "~/types";

interface IProps {
	category: {
		type: string;
		level?: number;
		sites: Site[];
	};
}

export default component$((props: IProps) => {
	return (
		<div
			class="mb-10px dark:text-white"
			style={{ fontSize: props.category?.level ? "24px" : "30px" }}
		>
			<div class="i-mdi-file-table-outline text-orange-400" />
			<span class="relative top-3px">{props.category.type}</span>
		</div>
	);
});

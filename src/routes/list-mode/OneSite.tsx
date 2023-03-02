import { component$ } from "@builder.io/qwik";
import { $ } from "@builder.io/qwik";
import type { Site } from "~/types";

interface IProps {
	site: Site;
}

export default component$((props: IProps) => {
	const onClick = $(() => {
		window.open(props.site.link, "_blank");
	});

	return (
		<div
			class="my-10px min-h-45px flex flex-col justify-end"
			style="border-bottom: 1px solid #ccc"
		>
			<div class="dark:color-#93C5FD color-#0000EE text-18px">
				<span onClick$={onClick} class={"cursor-pointer"}>
					{props.site.name}
				</span>
			</div>
			{props.site.desc && (
				<div class="dark:color-white color-gray-500 text-14px">
					<span onClick$={onClick} class={"cursor-pointer"}>
						{props.site.desc}
					</span>
				</div>
			)}
		</div>
	);
});

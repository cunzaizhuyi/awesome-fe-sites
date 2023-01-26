import { component$, useStyles$ } from '@builder.io/qwik';
import { $ } from '@builder.io/qwik';
import CardSiteStyle from './CardSite.css?inline';

interface IProps {
  site: {
    name: string,
    link: string,
    desc: string,
  }
}

export default component$((props: IProps) => {
  useStyles$(CardSiteStyle);

  const onClick = $(() => {
    window.open(props.site.link, '__blank');
  });

  return (
    <div onClick$={onClick}
         class='card cursor-pointer w-100% sm:w-23% text-center m-10px min-h-50px rounded-10px'
         style="border: 1px solid #ccc; box-shadow: 0px 0px 12px rgba(0, 0, 0, .12)">
      <div class='color-#0000EE text-18px h-50px lh-50px'
      style='border-bottom: 0.5px solid #ccc;'>
        <span>{props.site.name}</span>
      </div>
      <div class='color-gray-500 text-14px p-15px'>
        <span>{props.site.desc}</span>
      </div>
    </div>
  )
});
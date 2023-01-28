import { component$, useStyles$ } from '@builder.io/qwik';
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

  return (
    <a
      href={props.site.link}
      target="__blank"
      class='card cursor-pointer w-100% text-center min-h-50px rounded-6px transition-all-200 border-solid border border-#e9e9e9 dark:border-#444'
    >
      <div class='dark:color-#93C5FD color-#0000EE text-18px h-50px lh-50px dark:!border-#444'
        style='border-bottom: thin solid #e9e9e9;'>
        <span>{props.site.name}</span>
      </div>
      <div class='dark:color-white color-gray-500 text-14px p-15px'>
        <span>{props.site.desc}</span>
      </div>
    </a>
  )
});

import { component$, useStyles$, useStore, $ } from "@builder.io/qwik";
import { hotSites } from '~/utils/hotSites';
import style from './index.scss?inline';

export default component$(() => {
  useStyles$(style);

  const store = useStore({
    hotSites,
  });

  const onClick = $((site: any) => {
    window.open(site.link, '_blank');
  });

  return (
    <div class='hot-sites flex flex-wrap dark:bg-#18181a'>
      { store.hotSites.map((site: any) => {
          return (
            <div class='btn cursor-pointer m-5px dark:bg-#eee dark:text-black'
                 onClick$={() => onClick(site)}
            >
              { site.name }
            </div>
          )
      }) }
    </div>
  )
});
import { component$, useStore } from "@builder.io/qwik";
import { allSites } from "~/utils/sites";
import CardSite from "./CardSite";
import CategoryTitle from "~/components/CategoryTitle";

export default component$(() => {
  const store = useStore({
    allSites
  });

  return (
    <section class='all-sites'>
      { store.allSites.map((list, index) => {
        return <div class='site-block my-30px' key={index}>
          <CategoryTitle category={list}></CategoryTitle>
          <div class='flex flex-wrap justify-between'>
            {list.sites.map((site: any, secIndex) => {
              return <CardSite site={site} key={secIndex}></CardSite>
            })}
          </div>
        </div>
      })}
    </section>
  )
})
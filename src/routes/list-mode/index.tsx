import { component$ } from '@builder.io/qwik';
import SiteTitle from "~/components/SiteTitle";
import List from "./List";


export default component$(() => {
  return (
    <div class='dark:bg-black p-20px'>
      <SiteTitle></SiteTitle>
      <List></List>
    </div>
  )
});
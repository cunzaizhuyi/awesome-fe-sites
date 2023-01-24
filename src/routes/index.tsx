import { component$ } from '@builder.io/qwik';
import SiteTitle from "~/components/SiteTitle";
import List from './card-mode/List';


export default component$(() => {
  return (
    <div>
      <SiteTitle></SiteTitle>
      <List></List>
    </div>
  )
});
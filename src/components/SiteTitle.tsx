import { component$, $, useStore } from "@builder.io/qwik";
import { GithubIcon } from "~/components/icons/github";

export default component$(() => {
  const store = useStore({
    color: 'black'
  });

  const toggleTheme = $(() => {
    const theme = localStorage.getItem('awesome-fe-theme');
    if (!theme || theme === 'light') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('awesome-fe-theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('awesome-fe-theme', 'light');
    }
    store.color = localStorage.getItem('awesome-fe-theme') === 'light' ? 'black' : 'white'
  });

  return (
    <scetion className='centerLayout relative'>
      <div class='text-center dark:text-white'>
        <h1 class=''>
          <div class='i-mdi-forest text-green'></div>
          <span class='px-5px relative top-2px'>前端森林</span>
          <div className='i-mdi-forest text-green'></div>
        </h1>
        <div className='slogan'>前端酷站 尽收眼底</div>
      </div>
      <div class='flex absolute right-20px top--10px'>
        <GithubIcon color={store.color}></GithubIcon>
        <span class="ml-10px dark:text-white cursor-pointer" onClick$={toggleTheme}>主题切换</span>
      </div>
    </scetion>
  )
});
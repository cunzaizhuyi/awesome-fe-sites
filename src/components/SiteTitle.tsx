import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <scetion className='centerLayout relative'>
      <div class='text-center'>
        <h1 class=''>
          <div class='i-mdi-forest text-green'></div>
          <span class='px-5px relative top-2px'>前端森林</span>
          <div className='i-mdi-forest text-green'></div>
        </h1>
        <div className='slogan'>前端酷站 尽收眼底</div>
      </div>
      <div class='absolute right-20px top--10px'>
        <a href="https://github.com/cunzaizhuyi/awesome-fe-sites" target='_blank'>github</a>
      </div>
    </scetion>
  )
});
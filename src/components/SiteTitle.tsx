import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <scetion className='centerLayout'>
      <div class='text-center'>
        <h1 class=''>
          <div class='i-mdi-forest text-green'></div>
          <span class='px-5px relative top-2px'>前端森林</span>
          <div className='i-mdi-forest text-green'></div>
        </h1>
        <div className='slogan'>前端酷站 尽收眼底</div>
      </div>
    </scetion>
  )
});
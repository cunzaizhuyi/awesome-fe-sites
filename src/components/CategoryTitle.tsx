import { component$ } from "@builder.io/qwik";

interface IProps {
  category: {
    type: string,
    level?: number,
    sites: any[]
  }
}

export default component$((props: IProps) => {
  return (
    <div className='mb-10px'
    style={{fontSize: props.category?.level ? '24px' : '30px'}}>
      <div className="i-mdi-file-table-outline text-orange-400" />
      <span className='relative top-3px'>{props.category.type}</span>
    </div>
  )
})
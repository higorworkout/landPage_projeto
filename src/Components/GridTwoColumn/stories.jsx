import { GridTwoColumn } from './Index';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two column',
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus vitae mollitia iusto, earum inventore natus aperiam sapiente molestiae ab distinctio saepe? Ducimus necessitatibus quam nihil. Fugiat rem beatae a eaque.",
    srcImg: 'assets/images/javascript.svg'
},
  argTypes: {
    children: { type: 'string' }
  },
};

 export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  )
}

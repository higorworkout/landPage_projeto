import { MenuLink } from './Index';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https:www.w3schools.com'
},
  argTypes: {
    children: { type: 'string' }
  },
};

 export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  )
}

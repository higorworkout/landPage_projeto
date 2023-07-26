import { TextComponent } from './index'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
  children:  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. A qui temporibus eligendi rem eius commodi totam dignissimos. Corrupti commodi eaque mollitia voluptatum consequuntur labore nobis. Obcaecati, quo? Consequatur, quaerat eos?`,
},
  argTypes: {
    children: { type: 'string' }
  },
};

 export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem', padding: '3rem'}}>
      <TextComponent {...args} />
    </div>
  )
}

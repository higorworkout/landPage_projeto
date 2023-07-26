import { GridText } from './Index';
import mock from './mock'

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
  argTypes: {
    children: { type: 'string' }
  },
};

 export const Template = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  )
}

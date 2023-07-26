import { SectionBackground } from './Index';
import { SectionContainer } from '../SectionContainer/Index';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {children : (
        <div>
          <h1>Section Background</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae cupiditate at, unde natus sunt dignissimos dolorum ipsam saepe architecto molestias nihil ex repellat eligendi laboriosam praesentium quibusdam animi magnam dolores.</p>
        </div>
  )},
  argTypes: {
    children: { type: 'string' }
  },
};

 export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  )
}

import { SectionContainer } from './Index';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
       <div>
          <h1>SectionContainer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae cupiditate at, unde natus sunt dignissimos dolorum ipsam saepe architecto molestias nihil ex repellat eligendi laboriosam praesentium quibusdam animi magnam dolores.</p>
       </div>
    ),
},
  argTypes: {
    children: { type: '' }
  },
};

 export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}

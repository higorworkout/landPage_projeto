import { Header } from './index'

export default {
  title: 'Header',
  component: Header,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Header {...args} />;
export const Dark = (args) => <Header {...args} />;


Light.parameters = {
  backgrounds: {
      default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};

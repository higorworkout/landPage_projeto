import { Footer } from './Index';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com amor por Higor Soares</a></p>`,
},
  argTypes: {
    footerHtml: { type: 'string' }
  },
};

 export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}

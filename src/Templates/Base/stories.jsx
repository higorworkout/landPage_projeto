import { Base } from './Index';
import mock from './mock'
import { GridText } from '../../Components/GridText/Index';
import gridMock from '../../components/GridText/mock';
export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background/>
      <GridText {...gridMock} />
      <GridText {...gridMock} background/>
      <GridText {...gridMock} />
    </>
  ),
  ...mock,
}

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

 export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  )
}

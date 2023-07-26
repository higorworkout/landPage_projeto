import { screen } from '@testing-library/react'
import { NavLinks } from './Index';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={mock}/>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

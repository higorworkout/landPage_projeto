import { screen } from '@testing-library/react'
import { MenuLink } from './Index';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render', () => {
    renderTheme(<MenuLink>Children</MenuLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

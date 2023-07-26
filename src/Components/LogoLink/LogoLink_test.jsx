import { screen } from '@testing-library/react'
import { LogoLink } from './Index';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

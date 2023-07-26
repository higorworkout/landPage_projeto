import { screen } from '@testing-library/react'
import { Menu } from './Index';
import { renderTheme } from '../../styles/render-theme';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>Children</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

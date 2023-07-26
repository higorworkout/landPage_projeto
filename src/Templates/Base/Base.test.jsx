import { screen } from '@testing-library/react'
import { Base } from './Index';
import { renderTheme } from '../../styles/render-theme';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>Children</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react'
import { GridImage } from './Index';
import { renderTheme } from '../../styles/render-theme';

describe('<GridImage />', () => {
  it('should render', () => {
    renderTheme(<GridImage>Children</GridImage>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

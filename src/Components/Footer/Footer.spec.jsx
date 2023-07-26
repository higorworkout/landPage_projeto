import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from './Index';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

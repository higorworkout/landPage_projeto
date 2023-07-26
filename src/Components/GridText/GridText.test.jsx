import { screen } from '@testing-library/react'
import { GridText } from './Index';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock'
describe('<GridText />', () => {
  it('should render', () => {
    renderTheme(<GridText>Children</GridText>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

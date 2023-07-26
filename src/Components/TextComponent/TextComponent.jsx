import { screen } from '@testing-library/react'
import {  } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('< />', () => {
  it('should render', () => {
    renderTheme(<>Children</>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

import { expect, it, test } from 'vitest'
import { Heading } from './index'

it('should render Heading with text hello youtube'), () => {
  render( <Heading>Hello Youtube</Heading>);
  const heading = screen.getByRole('heading', {name: /Hello Youtube/});
  expect(heading).toBeInTheDocument();
  screen.debug();
}


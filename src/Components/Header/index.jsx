import P from 'prop-types'
import * as Styled from './styles'

export const Header = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return <Styled.Title
  colorDark={colorDark}
  as={as}
  size={size}
  uppercase={uppercase}
  >
    {children}
  </Styled.Title>;
};

Header.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']).isRequired,
  uppercase: P.bool.isRequired,
}

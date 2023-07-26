import P from 'prop-types';
import * as Styled from './styles.jsx';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_black' : '_self'
  return (
    <Styled.Container href={link} target={target}>
        {children}
    </Styled.Container>
  )
}

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequires,
  newTab: P.bool,
}

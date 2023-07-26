import P from 'prop-types';
import * as Styled from './styles.jsx';
import { MenuLink } from '../MenuLink/Index.jsx';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container>
        {links.map((link) => (
            <MenuLink key={link.link} {...link}/>
        ))}
    </Styled.Container>
  )
}

NavLinks.propTypes = {
  links: P.arrayOf(P.shape({
    children: P.string.isRequired,
    link: P.string.isRequired,
    newTab: P.bool,
  }),
  ).isRequired,
};

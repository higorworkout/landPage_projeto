import P from 'prop-types';
import * as Styled from './styles.jsx';
import links from '../../components/NavLinks/mock';

// Component
import { Menu } from '../../components/Menu/Index'
import { Footer } from '../../components/Footer/Index'
import { GoTop } from '../../components/GoTop'

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        <h1>{children}</h1>
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  )
}

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
}

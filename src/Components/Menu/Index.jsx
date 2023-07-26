import P from 'prop-types';
import * as Styled from './styles.jsx';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink'
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { useState } from 'react';

export const Menu = ({ links = [], logoData}) => {
  const [Visible, setVisible] = useState(false)

  return (
    <>
    <Styled.Button visible={Visible} onClick={() => setVisible(true)} aria-label="Open/Close menu"> {Visible ? <CloseIcon aria-label="Close menu"/> : <MenuIcon aria-label="Open menu"/>} </Styled.Button>
    <Styled.Container visible={Visible} onClick={() => setVisible(false)}>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData}/>
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
    </>
  )
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
}

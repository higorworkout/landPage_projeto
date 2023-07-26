import P from 'prop-types';
import * as Styled from './styles.jsx';
import { TextComponent} from '../TextComponent/index.jsx'
import {SectionContainer} from '../SectionContainer/index.jsx'


export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer >
        <Styled.Container>
            <TextComponent>{footerHtml}</TextComponent>
        </Styled.Container>
      </SectionContainer>
    </Styled.Container>
  )
}

Footer.propTypes = {
  FooterHtml: P.string.isRequired,
}

import { SectionBackground } from '../SectionBackground/Index';
import { Header } from '../Header/Index';
import { TextComponent } from '../TextComponent/Index.jsx';
import P from 'prop-types';
import * as Styled from './styles.jsx';

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '' }) => {

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Header uppercase colorDark={!background} as="h2">{title}</Header>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
}

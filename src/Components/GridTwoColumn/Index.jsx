import P from 'prop-types';
import * as Styled from './styles.jsx';
import { SectionBackground } from '../SectionBackground/Index';
import { Header } from '../Header/Index';
import {TextComponent} from '../TextComponent/Index';

export const GridTwoColumns = ({ title, text, srcImg, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId='sectionId'>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Header uppercase>{title}</Header>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title}/>
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  )
}

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
}

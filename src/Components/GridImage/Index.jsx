import P from 'prop-types';
import * as Styled from './styles.jsx';
import { SectionBackground } from '../SectionBackground';
import { Header } from '../Header';
import { TextComponent } from '../TextComponent';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '' }) => {

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Header size="huge" uppercase colorDark={!background} as='h2'>{title}</Header>
        <TextComponent> {description} </TextComponent>
        <Styled.Grid>{grid.map(el => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
                <Styled.Image src={el.srcImg} alt={el.altText}></Styled.Image>
            </Styled.GridElement>
        ))}</Styled.Grid>
      </Styled.Container>
   </SectionBackground>
  )
}

GridImage.propTypes = {
  title: P.string.isRequired,
  background: P.bool,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
     altText: P.string.isRequired,
     srcImg: P.string.isRequired,
  }),
  ).isRequired,
  sectionId: P.string,
};

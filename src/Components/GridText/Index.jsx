import P from 'prop-types';
import * as Styled from './styles.jsx';
import { SectionBackground } from '../SectionBackground';
import { Header } from '../Header/index.jsx';
import { TextComponent } from '../TextComponent/index.jsx';

export const GridText = ({
  title,
  description,
  grid,
  background = false, sectionId = "" }) => {
  return (
    <SectionBackground background={background} sectionId='sectionId'>
      <Styled.Container>
        <Header size="huge" uppercase colorDark={!background} as='h2'>{title}</Header>
        <TextComponent> {description} </TextComponent>
        <Styled.Grid>{grid.map(el => (
            <Styled.GridElement key={el.title}>
                <Header size="medium" colorDark={!background}>{el.title}</Header>
                <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
        ))}</Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridText.propTypes = {
  title: P.string.isRequired,
  background: P.bool,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
     title: P.string.isRequired,
     description: P.string.isRequired,
  }),
  ).isRequired,
  sectionId: P.string,
};

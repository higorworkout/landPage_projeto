import P from 'prop-types';
import * as Styled from './Styles';

export const SectionContainer = ({ children }) => {
  return (
    <Styled.Container>{children}</Styled.Container>
  )
}

SectionContainer.propTypes = {
  children: P.node.isRequired,
}

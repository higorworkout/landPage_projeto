import P from 'prop-types';
import * as Styled from './styles.jsx';
import { Header } from '../Header/index.jsx'

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Header size="small" uppercase>
      <Styled.Anchor href={link}>
        {!!srcImg && <img src={srcImg} alt={text} /> }
        {!srcImg && text}
      </Styled.Anchor>
    </Header>
  )
}

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
}

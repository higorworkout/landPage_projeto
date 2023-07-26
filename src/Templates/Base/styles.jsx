import styled , {css } from 'styled-components';
import {Container as TextComponent} from '../../components/TextComponent/styles';

export const Container = styled.div`
  ${({theme}) => css`

      @media ${theme.media.lteMedium} {
        padding-top: 0;
      }
  `}
`;


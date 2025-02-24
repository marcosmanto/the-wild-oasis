import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: ${borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background-color: ${colors['grey-100']};
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: ${colors['brand-600']};
  }
`

export default ButtonIcon

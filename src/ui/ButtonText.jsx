import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const ButtonText = styled.button`
  color: ${colors['brand-600']};
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: ${borderRadius.md};

  &:hover,
  &:active {
    color: ${colors['brand-700']};
  }
`

export default ButtonText

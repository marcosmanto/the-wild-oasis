import styled from 'styled-components'
import { colors, borderRadius, shadows } from '@/styles/constants'

const Input = styled.input`
  border: 1px solid ${colors['grey-300']};
  background-color: ${colors['grey-0']};
  border-radius: ${borderRadius.sm};
  padding: 0.8rem 1.2rem;
  box-shadow: ${shadows.sm};
`

export default Input

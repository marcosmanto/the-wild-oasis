import styled from 'styled-components'
import { colors, shadows, borderRadius } from '@/styles/constants'

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid ${colors['grey-300']};
  border-radius: ${borderRadius.sm};
  background-color: ${colors['grey-0']};
  font-weight: 500;
  box-shadow: ${shadows.sm};
`

export default StyledSelect

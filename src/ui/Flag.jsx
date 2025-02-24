import { borderRadius, colors } from '@/styles/constants'
import styled from 'styled-components'

export const Flag = styled.img`
  max-width: 2rem;
  border-radius: ${borderRadius.tiny};
  display: block;
  border: 1px solid ${colors['grey-100']};
`

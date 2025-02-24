import styled from 'styled-components'
import { colors, shadows, borderRadius } from '@/styles/constants'

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid ${colors['grey-300']};
  border-radius: ${borderRadius.sm};
  background-color: ${colors['grey-0']};
  box-shadow: ${shadows.sm};
  width: 100%;
  height: 8rem;
`

export default Textarea

import { colors } from '@/styles/constants'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${colors['grey-0']};
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid ${colors['grey-100']};
`

function Header() {
  return <StyledHeader>HEADER</StyledHeader>
}

export default Header

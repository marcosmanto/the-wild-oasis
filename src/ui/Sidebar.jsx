import { colors } from '@/styles/constants'
import Logo from '@/ui/Logo'
import MainNav from '@/ui/MainNav'
import styled from 'styled-components'

const StyledSidebar = styled.aside`
  background-color: ${colors['grey-0']};
  padding: 3.2rem 2.4rem;
  border-right: 1px solid ${colors['grey-100']};

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  )
}

export default Sidebar

import { colors } from '@/styles/constants'
import Header from '@/ui/Header'
import Sidebar from '@/ui/Sidebar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`

const Main = styled.main`
  background-color: ${colors['grey-50']};
  padding: 4rem 4.8rem 6.4rem;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  )
}

export default AppLayout

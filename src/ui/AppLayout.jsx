import { colors } from '@/styles/constants'
import Header from '@/ui/Header'
import Sidebar from '@/ui/Sidebar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: ${colors['grey-50']};
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
  overflow-y: scroll;
  min-width: calc(100rem - 26rem);
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  )
}

export default AppLayout

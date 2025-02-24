import GlobalStyles from '@/styles/GlobalStyles'
import Button from '@/ui/Button'
import Heading from '@/ui/Heading'
import Input from '@/ui/Input'
import Row from '@/ui/Row'
import styled from 'styled-components'

const StyledApp = styled.main`
  padding: 20px;
`

function App() {
  return (
    <div>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">
                Check in and <output></output>
              </Heading>
              <Button size="small" onClick={() => alert('Check in')}>
                Check in
              </Button>
              <Button size="small" onClick={() => alert('Check out')}>
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </div>
  )
}

export default App

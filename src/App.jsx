import GlobalStyles from '@/styles/GlobalStyles'
import Button from '@/ui/Button'
import Heading from '@/ui/Heading'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Heading>Hello World</Heading>
      <Button onClick={() => alert('Hello World')}>Click me</Button>
      hello world
    </div>
  )
}

export default App

import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

import { useMoveBack } from '../hooks/useMoveBack'
import Heading from '../ui/Heading'

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: ${colors['grey-50']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`

const Box = styled.div`
  background-color: ${colors['grey-0']};
  border: 1px solid ${colors['grey-100']};
  border-radius: ${borderRadius.md};

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`

function PageNotFound() {
  const moveBack = useMoveBack()

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">The page you are looking for could not be found 😢</Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  )
}

export default PageNotFound

import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const StyledErrorFallback = styled.main`
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
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: 'Sono';
    margin-bottom: 3.2rem;
    color: ${colors['grey-500']};
  }
`

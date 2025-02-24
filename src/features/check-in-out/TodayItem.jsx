import styled from 'styled-components'
import { colors } from '@/styles/constants'

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${colors['grey-100']};

  &:first-child {
    border-top: 1px solid ${colors['grey-100']};
  }
`

const Guest = styled.div`
  font-weight: 500;
`

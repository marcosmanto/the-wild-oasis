import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`

const PaginationButton = styled.button`
  background-color: ${props => (props.active ? colors['brand-600'] : colors['grey-50'])};
  color: ${props => (props.active ? colors['brand-50'] : 'inherit')};
  border: none;
  border-radius: ${borderRadius.sm};
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: ${colors['brand-600']};
    color: ${colors['brand-50']};
  }
`

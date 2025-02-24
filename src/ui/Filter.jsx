import { colors, shadows, borderRadius } from '@/styles/constants'
import styled, { css } from 'styled-components'

const StyledFilter = styled.div`
  border: 1px solid ${colors['grey-100']};
  background-color: ${colors['grey-0']};
  box-shadow: ${shadows.sm};
  border-radius: ${borderRadius.sm};
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`

const FilterButton = styled.button`
  background-color: ${colors['grey-0']};
  border: none;

  ${props =>
    props.active &&
    css`
      background-color: ${colors['brand-600']};
      color: ${colors['brand-50']};
    `}

  border-radius: ${borderRadius.sm};
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: ${colors['brand-600']};
    color: ${colors['brand-50']};
  }
`

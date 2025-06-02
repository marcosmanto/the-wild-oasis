import styled, { css } from 'styled-components'
import { colors, shadows, borderRadius } from '@/styles/constants'

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;

  border: 1px solid ${colors['grey-300']};
  border-radius: ${borderRadius.sm};
  background-color: ${colors['grey-0']};
  font-weight: 500;
  box-shadow: ${shadows.sm};
  ${props =>
    props.type === 'black' &&
    css`
      color: white;
      background-color: black;
    `}
`

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select

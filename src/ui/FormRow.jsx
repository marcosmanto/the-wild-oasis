import styled from 'styled-components'
import { colors } from '@/styles/constants'

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.15fr 2fr 1fr;
  column-gap: 2rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  border-bottom: 1px solid ${colors['grey-200']};

  form[type='modal'] & {
    border-bottom: 1px solid ${colors['grey-100']};
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

const Label = styled.label`
  font-weight: 500;
`

const Error = styled.span`
  right: 0;
  font-size: 1.4rem;
  color: ${colors['red-700']};
`

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow type="form-row">
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  )
}

export default FormRow

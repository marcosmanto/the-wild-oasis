import styled, { css } from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const Form = styled.form`
  ${props =>
    props.type !== 'modal' &&
    css`
      padding: 2.4rem 4rem;
      background-color: ${colors['grey-0']};
      border: 1px solid ${colors['grey-100']};
      border-radius: ${borderRadius.md};
    `}

  ${props =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}

  overflow: hidden;
  font-size: 1.4rem;
`

export default Form

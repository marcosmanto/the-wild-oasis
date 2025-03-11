import styled, { css } from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const Form = styled.form`
  ${props =>
    props.type === 'regular' &&
    css`
      padding: 2.4rem 4rem;
      margin-top: 0.4rem;
      background-color: ${colors['grey-100']};
      border: 1px solid ${colors['grey-200']};
      border-radius: ${borderRadius.md};
      max-width: 99%;
      margin-inline: auto;
    `}

  ${props =>
    props.type === 'modal' &&
    css`
      //width: 80rem;
      background-color: ${colors['grey-0']};
      border: 0;
    `}

  & div:nth-last-child(3) {
    border-bottom: 0;
  }

  overflow: hidden;
  font-size: 1.4rem;
`

export default Form

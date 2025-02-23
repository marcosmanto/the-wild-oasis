import styled, { css } from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `
}

const variations = {
  primary: css`
    color: ${colors['brand-50']};
    background-color: ${colors['brand-600']};

    &:hover {
      background-color: ${colors['brand-700']};
    }
  `,
  secondary: css`
    color: ${colors['grey-600']};
    background: ${colors['grey-0']};
    border: 1px solid ${colors['grey-200']};

    &:hover {
      background-color: ${colors['grey-50']};
    }
  `,
  danger: css`
    color: ${colors['red-100']};
    background-color: ${colors['red-700']};

    &:hover {
      background-color: ${colors['red-800']};
    }
  `
}

const Button = styled.button`
  border: none;
  border-radius: ${borderRadius.md};
  cursor: pointer;

  ${props => sizes[props.size] || sizes.medium}
  ${props => variations[props.variation] || variations.primary}
`

export default Button

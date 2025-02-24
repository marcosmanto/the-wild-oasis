import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: ${borderRadius.sm};

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: ${borderRadius.sm};
    border: none;
    color: ${colors['brand-50']};
    background-color: ${colors['brand-600']};
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: ${colors['brand-700']};
    }
  }
`

export default FileInput

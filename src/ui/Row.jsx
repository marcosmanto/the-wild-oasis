import styled, { css } from 'styled-components'

const Row = styled.div`
  display: flex;
  ${props =>
    props.type === 'horizontal'
      ? css`
          ${props.horizontalAlign === 'space-between' && 'justify-content: space-between'};
          ${props.horizontalAlign === 'center' && 'justify-content: center'};
          ${props.horizontalAlign === 'right' && 'justify-content: end'};
          align-items: center;
          gap: 1.6rem;
        `
      : css`
          flex-direction: column;
          gap: 1.6rem;
        `};
`

Row.defaultProps = {
  type: 'vertical',
  horizontalAlign: ''
}

export default Row

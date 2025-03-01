import styled, { css } from 'styled-components'

const Row = styled.div`
  display: flex;
  ${props =>
    props.type === 'horizontal'
      ? css`
          ${props.horizontalalign === 'space-between' && 'justify-content: space-between'};
          ${props.horizontalalign === 'center' && 'justify-content: center'};
          ${props.horizontalalign === 'right' && 'justify-content: end'};
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
  horizontalalign: ''
}

export default Row

import styled, { css } from 'styled-components'

const Spacer = styled.div`
  ${props =>
    props.type === 'horizontal'
      ? css`
          width: ${props => props.space};
        `
      : css`
          height: ${props => props.space};
        `}
`

Spacer.defaultProps = {
  type: 'vertical',
  space: '2.4rem'
}

export default Spacer
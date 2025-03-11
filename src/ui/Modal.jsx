import styled from 'styled-components'
import { colors, shadows, borderRadius } from '@/styles/constants'
import { HiXMark } from 'react-icons/hi2'
import { createPortal } from 'react-dom'

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors['grey-0']};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.lg};
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  width: 100dvw;
  max-width: 70dvw;
  min-width: 85rem;
  z-index: 1001;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: ${borderRadius.sm};
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1rem;
  right: 1.6rem;

  &:hover {
    background-color: ${colors['grey-100']};
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: ${colors['grey-500']};
    stroke: ${colors['grey-500']}; */
    color: ${colors['grey-500']};
  }
`
function Modal({ onClose, children }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  )
}

export default Modal

import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'
import { HiSpeakerWave, HiXMark } from 'react-icons/hi2'
import { useState } from 'react'

const StyledWarningBox = styled.div`
  background: linear-gradient(135deg, ${colors['yellow-100']} 0%, #fef3c7 100%);
  border: 2px solid ${colors['yellow-700']};
  border-radius: ${borderRadius.md};
  padding: 1.6rem 2.4rem;
  margin-bottom: 2.4rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  box-shadow: 0 4px 12px rgba(161, 98, 7, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors['yellow-700']}, #f59e0b, ${colors['yellow-700']});
    border-radius: ${borderRadius.md} ${borderRadius.md} 0 0;
  }
`

const IconContainer = styled.div`
  background-color: ${colors['yellow-700']};
  color: ${colors['yellow-100']};
  border-radius: 50%;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

const Content = styled.div`
  flex: 1;

  & h3 {
    color: ${colors['yellow-700']};
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  & p {
    color: ${colors['grey-700']};
    font-size: 1.4rem;
    line-height: 1.5;
    margin: 0;
  }

  & .discount {
    color: ${colors['yellow-700']};
    font-weight: 700;
    font-size: 1.6rem;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors['yellow-700']};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: ${borderRadius.sm};
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(161, 98, 7, 0.1);
    transform: scale(1.1);
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`

function WarningBox({ title = '🌞 PROMOÇÃO DE VERÃO', message = 'Aproveite nossa super promoção de verão com desconto especial em todas as cabanas!', discount = '50% OFF', closable = true }) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <StyledWarningBox>
      <IconContainer>
        <HiSpeakerWave />
      </IconContainer>

      <Content>
        <h3>{title}</h3>
        <p>
          {message} <span className="discount">{discount}</span>
        </p>
      </Content>

      {closable && (
        <CloseButton onClick={() => setIsVisible(false)}>
          <HiXMark />
        </CloseButton>
      )}
    </StyledWarningBox>
  )
}

export default WarningBox

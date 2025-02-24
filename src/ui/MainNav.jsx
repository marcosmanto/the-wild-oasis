import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const Link = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: ${colors['grey-600']};
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: ${colors['grey-800']};
    background-color: ${colors['grey-50']};
    border-radius: ${borderRadius.sm};
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${colors['grey-400']};
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: ${colors['brand-600']};
  }
`

import styled from 'styled-components'
import { colors, borderRadius } from '@/styles/constants'

const DashboardBox = styled.div`
  background-color: ${colors['grey-0']};
  border: 1px solid ${colors['grey-100']};
  border-radius: ${borderRadius.md};

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export default DashboardBox

import Heading from '../ui/Heading'
import Row from '@/ui/Row'
import CabinTable from '@/features/cabins/CabinTable'
import AddCabin from '@/features/cabins/AddCabin'
import CabinTableOperations from '@/features/cabins/CabinTableOperations'
import { useSearchParams } from 'react-router-dom'
import { options } from '@/features/cabins/cabinFilterOptions'

import styled from 'styled-components'
import { colors } from '@/styles/constants'

const SmallText = styled.span`
  font-size: 1.4rem; // Tamanho menor de fonte
  color: ${colors['grey-400']}; // Cinza mais escuro
  font-weight: 400; // Opcional: peso da fonte
`

function Cabins() {
  const [searchParams] = useSearchParams()
  const filterValue = searchParams.get('discount')
  const selectedFilterLabel = options.find(option => option.value === filterValue)?.label?.toLocaleLowerCase()

  return (
    <>
      <Row type="horizontal" horizontalalign="space-between">
        <Heading as="h1">
          All cabins <SmallText>{selectedFilterLabel ? '(' + selectedFilterLabel + ')' : ''}</SmallText>
        </Heading>
        <CabinTableOperations></CabinTableOperations>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins

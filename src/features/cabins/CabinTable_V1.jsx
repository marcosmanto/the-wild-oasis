import CabinRow from '@/features/cabins/CabinRow'
import { useCabins } from '@/features/cabins/useCabins'
import { colors } from '@/styles/constants'
import Spinner from '@/ui/Spinner'
import styled from 'styled-components'

const Table = styled.div`
  border: 1px solid ${colors['grey-200']};

  font-size: 1.4rem;
  background-color: ${colors['grey-0']};
  border-radius: 7px;
  overflow-x: auto;
`

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 6.2rem minmax(50px, 1.8fr) minmax(100px, 2.2fr) minmax(80px, 1fr) minmax(80px, 1fr) minmax(80px, 1fr);
  column-gap: 2.4rem;
  align-items: center;
  background-color: ${colors['grey-50']};
  border-bottom: 1px solid ${colors['grey-100']};
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: ${colors['grey-600']};
  padding: 1.6rem 2.4rem;
`

function CabinTable() {
  const { cabins, isLoading } = useCabins()

  if (isLoading) return <Spinner />

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map(cabin => (
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </Table>
  )
}

export default CabinTable

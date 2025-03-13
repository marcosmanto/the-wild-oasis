import CabinRow from '@/features/cabins/CabinRow'
import { useCabins } from '@/features/cabins/useCabins'
import Spinner from '@/ui/Spinner'
import Table from '@/ui/Table'

function CabinTable() {
  const { cabins, isLoading } = useCabins()

  if (isLoading) return <Spinner />

  return (
    <Table columns="6.2rem minmax(50px, 1.8fr) minmax(100px, 2.2fr) minmax(80px, 1fr) minmax(80px, 1fr) minmax(80px, 1fr)">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>

      <Table.Body data={cabins} render={cabin => <CabinRow key={cabin.id} cabin={cabin} />} />
    </Table>
  )
}

export default CabinTable

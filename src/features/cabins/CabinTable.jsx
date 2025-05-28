import CabinRow from '@/features/cabins/CabinRow'
import { useCabins } from '@/features/cabins/useCabins'
import Menus from '@/ui/Menus'
import Spinner from '@/ui/Spinner'
import Table from '@/ui/Table'
import { useSearchParams } from 'react-router-dom'
import { options } from '@/features/cabins/CabinTableOperations'

function CabinTable() {
  const { cabins, isLoading } = useCabins()
  const [searchParams] = useSearchParams()

  if (isLoading) return <Spinner />

  const filterValue = searchParams.get('discount') || options.find(option => option.defaultValue)?.value

  let filteredCabins
  if (filterValue === 'all') filteredCabins = cabins
  if (filterValue === 'no-discount') filteredCabins = cabins?.filter(cabin => cabin.discount === 0)
  if (filterValue === 'with-discount') filteredCabins = cabins?.filter(cabin => cabin.discount > 0)

  return (
    <Menus>
      <Table columns="6.2rem minmax(50px, 1.8fr) minmax(100px, 2.2fr) minmax(80px, 1fr) minmax(80px, 1fr) minmax(80px, 1fr)">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body data={filteredCabins} render={cabin => <CabinRow key={cabin.id} cabin={cabin} />} />
      </Table>
    </Menus>
  )
}

export default CabinTable

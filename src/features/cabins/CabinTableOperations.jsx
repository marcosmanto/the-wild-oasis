import TableOperations from '@/ui/TableOperations'
import Filter from '@/ui/Filter'
import { options } from './cabinFilterOptions'

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={options} />
    </TableOperations>
  )
}

export default CabinTableOperations

import TableOperations from '@/ui/TableOperations'
import Filter from '@/ui/Filter'
import { options } from './cabinFilterOptions'
import SortBy from '@/ui/SortBy'

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={options} />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
          { value: 'maxCapacity-desc', label: 'Sort by capacity (high first)' },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' }
        ]}
      />
    </TableOperations>
  )
}

export default CabinTableOperations

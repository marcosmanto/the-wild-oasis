import TableOperations from '@/ui/TableOperations'
import Filter from '@/ui/Filter'

export const options = [
  { value: 'all', label: 'All' },
  { value: 'no-discount', label: 'No discount' },
  { value: 'with-discount', label: 'With discount', defaultValue: true }
]

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={options} />
    </TableOperations>
  )
}

export default CabinTableOperations

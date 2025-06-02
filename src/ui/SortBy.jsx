import Select from '@/ui/Select'
import { useSearchParams } from 'react-router-dom'

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const current = searchParams.get('sortBy') || ''

  function handleOnChange(event) {
    searchParams.set('sortBy', event.target.value)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Select options={options} onChange={handleOnChange} value={current} />
    </div>
  )
}

export default SortBy

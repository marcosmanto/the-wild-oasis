import { deleteCabin } from '@/services/apiCabins'
import { colors } from '@/styles/constants'
import { formatCurrency } from '@/utils/helpers'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import styled from 'styled-components'

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 6.4rem 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors['grey-100']};
  }
`

const Img = styled.img`
  display: block;
  min-width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translate(-2px, 1px);
  border-radius: 6%;
  margin-bottom: 2px;
`

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors['grey-600']};
  font-family: 'Sono';
`

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: ${colors['green-700']};
`

function CabinRow({ cabin }) {
  const { id: cabinId, name, maxCapacity, regularPrice: price, description, discount, image } = cabin

  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteCabinById } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      toast.success('Cabin successfully deleted')
    },
    onError: err => toast.error(err.message)
  })

  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(price)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => deleteCabinById(cabinId)} disabled={isDeleting}>
        Delete
      </button>
    </TableRow>
  )
}

export default CabinRow

import { useDeleteCabin } from '@/data/cabins/useDeleteCabin'
import CreateCabinForm from '@/features/cabins/CreateCabinForm'
import { colors } from '@/styles/constants'
import { formatCurrency } from '@/utils/helpers'
import { useState } from 'react'
import styled from 'styled-components'

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 6.2rem minmax(50px, 1.8fr) minmax(100px, 2.2fr) minmax(80px, 1fr) minmax(80px, 1fr) minmax(80px, 1fr);
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

const Span = styled.span`
  text-align: center;
`

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false)

  const { id: cabinId, name, maxCapacity, regularPrice: price, description, discount, image } = cabin

  const { deleteCabin, isDeleting } = useDeleteCabin()

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(price)}</Price>
        {discount ? <Discount>{formatCurrency(discount)}</Discount> : <Span>&mdash;</Span>}
        <div>
          <button onClick={() => setShowForm(show => !show)}>Edit</button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} onCloseForm={() => setShowForm(false)} />}
    </>
  )
}

export default CabinRow

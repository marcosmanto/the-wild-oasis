import { useDeleteCabin } from '@/features/cabins/useDeleteCabin'
import CreateCabinForm from '@/features/cabins/CreateCabinForm'
import { colors } from '@/styles/constants'
import { formatCurrency } from '@/utils/helpers'
import styled from 'styled-components'
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'
import { useCreateCabin } from '@/features/cabins/useCreateCabin'
import Modal from '@/ui/Modal'
import ConfirmDelete from '@/ui/ConfirmDelete'
import Table from '@/ui/Table'

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
  const { deleteCabin, isDeleting } = useDeleteCabin()
  const { createCabin, isCreating } = useCreateCabin()

  const { id: cabinId, name, maxCapacity, regularPrice: price, description, discount, image } = cabin

  function handleDuplicate() {
    createCabin({
      newCabinData: {
        name: `Copy of ${name}`,
        maxCapacity,
        regularPrice: price,
        discount,
        description,
        image
      },
      type: 'duplicate'
    })
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(price)}</Price>
      {discount ? <Discount>{formatCurrency(discount)}</Discount> : <Span>&mdash;</Span>}
      <div>
        <button onClick={handleDuplicate} disabled={isCreating}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens="delete">
            <button disabled={isDeleting}>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete resourceName="cabin" onConfirm={() => deleteCabin(cabinId)} />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  )
}

export default CabinRow

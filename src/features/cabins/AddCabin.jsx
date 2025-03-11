import CreateCabinForm from '@/features/cabins/CreateCabinForm'
import Button from '@/ui/Button'
import Modal from '@/ui/Modal'
import { useState } from 'react'

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpenModal(show => !show)}>Add new cabin</Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  )
}

export default AddCabin

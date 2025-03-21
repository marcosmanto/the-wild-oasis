// import CabinTable from '@/features/cabins/CabinTable'
import CreateCabinForm from '@/features/cabins/CreateCabinForm'
import Button from '@/ui/Button'
import Modal from '@/ui/Modal'

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
        {/* <Modal.Open opens="table">
          <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window> */}
      </Modal>
    </div>
  )
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false)

//   return (
//     <>
//       <Button onClick={() => setIsOpenModal(show => !show)}>Add new cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   )
// }

export default AddCabin

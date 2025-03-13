import styled from 'styled-components'
import { colors } from '@/styles/constants'
import Heading from '@/ui/Heading'
import Button from '@/ui/Button'

const StyledConfirmDelete = styled.div`
  width: 75%;
  height: 25dvh;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: ${colors['grey-500']};
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

function ConfirmDelete({ resourceName, onConfirm, disabled, successAction }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? <br />
        This action cannot be undone.
      </p>

      <div>
        <Button onClick={successAction} variation="secondary" disabled={disabled}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  )
}

export default ConfirmDelete

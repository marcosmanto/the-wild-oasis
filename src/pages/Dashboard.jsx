import Row from '@/ui/Row'
import Heading from '@/ui/Heading'
import WarningBox from '@/ui/WarningBox'

function Dashboard() {
  return (
    <>
      <WarningBox />
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <p>TEST</p>
      </Row>
    </>
  )
}

export default Dashboard

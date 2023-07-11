import { Outlet } from 'react-router-dom'
import ResetStyles from '../Components/UI/Global.styles'
import AdminHeader from '../Pages/Admin/Components/Header/AdminHeader'
import Container from '../Components/UI/Container.style'

function AdminLayout() {
  return (
    <Container style={{ padding: '0 2.7%' }}>
      <ResetStyles />
      <AdminHeader />
      <Outlet />
    </Container>
  )
}

export default AdminLayout

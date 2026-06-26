import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import usePageAnimations from '../gsap/usePageAnimations'

export default function Layout() {
  const scope = usePageAnimations()

  return (
    <>
      <Topbar />
      <div className="layout">
        <Sidebar />
        <main className="main" ref={scope}>
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  )
}

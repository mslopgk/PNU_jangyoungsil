import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToHash from './components/ScrollToHash'
import VariantSwitcher from './components/VariantSwitcher'
import ConceptNav from './concepts/ConceptNav'
import ConceptGallery from './concepts/ConceptGallery'
import Concept1 from './concepts/Concept1'
import Concept2 from './concepts/Concept2'
import Concept3 from './concepts/Concept3'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Facility from './pages/Facility'
import Heritage from './pages/Heritage'
import News from './pages/News'
import Partners from './pages/Partners'
import Research from './pages/Research'

export default function App() {
  const { pathname } = useLocation()
  const onConcepts = pathname.startsWith('/concepts')

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/research" element={<Research />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
        <Route path="/concepts" element={<ConceptGallery />} />
        <Route path="/concepts/1" element={<Concept1 />} />
        <Route path="/concepts/2" element={<Concept2 />} />
        <Route path="/concepts/3" element={<Concept3 />} />
      </Routes>
      {onConcepts ? <ConceptNav /> : <VariantSwitcher />}
    </>
  )
}

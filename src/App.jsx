import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToHash from './components/ScrollToHash'
import VariantSwitcher from './components/VariantSwitcher'
import ConceptNav from './concepts/ConceptNav'
import ConceptGallery from './concepts/ConceptGallery'
import Concept1 from './concepts/Concept1'
import Concept2 from './concepts/Concept2'
import Concept3 from './concepts/Concept3'
import DashGallery from './dashboards/DashGallery'
import DashGlass from './dashboards/DashGlass'
import DashBrutal from './dashboards/DashBrutal'
import DashBento from './dashboards/DashBento'
import DashMission from './dashboards/DashMission'
import DashBroadsheet from './dashboards/DashBroadsheet'
import DashModernist from './dashboards/DashModernist'
import DashBlueprint from './dashboards/DashBlueprint'
import DashNeumorph from './dashboards/DashNeumorph'
import DashObsidian from './dashboards/DashObsidian'
import DashSwiss from './dashboards/DashSwiss'
import DashDeco from './dashboards/DashDeco'
import DashGenerative from './dashboards/DashGenerative'
import DashNotebook from './dashboards/DashNotebook'
import DashNoir from './dashboards/DashNoir'
import DashIndustrial from './dashboards/DashIndustrial'
import DashCivic from './dashboards/DashCivic'
import DashAtlas from './dashboards/DashAtlas'
import DashSignal from './dashboards/DashSignal'
import DashArchive from './dashboards/DashArchive'
import DashFoundry from './dashboards/DashFoundry'
import DashConstellation from './dashboards/DashConstellation'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Facility from './pages/Facility'
import Heritage from './pages/Heritage'
import News from './pages/News'
import Partners from './pages/Partners'
import Research from './pages/Research'

export default function App() {
  const { pathname } = useLocation()
  const onPreview = pathname.startsWith('/concepts') || pathname.startsWith('/dash')

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
        <Route path="/dash" element={<DashGallery />} />
        <Route path="/dash/glass" element={<DashGlass />} />
        <Route path="/dash/brutal" element={<DashBrutal />} />
        <Route path="/dash/bento" element={<DashBento />} />
        <Route path="/dash/mission" element={<DashMission />} />
        <Route path="/dash/broadsheet" element={<DashBroadsheet />} />
        <Route path="/dash/modernist" element={<DashModernist />} />
        <Route path="/dash/blueprint" element={<DashBlueprint />} />
        <Route path="/dash/neumorph" element={<DashNeumorph />} />
        <Route path="/dash/obsidian" element={<DashObsidian />} />
        <Route path="/dash/swiss" element={<DashSwiss />} />
        <Route path="/dash/deco" element={<DashDeco />} />
        <Route path="/dash/generative" element={<DashGenerative />} />
        <Route path="/dash/notebook" element={<DashNotebook />} />
        <Route path="/dash/noir" element={<DashNoir />} />
        <Route path="/dash/industrial" element={<DashIndustrial />} />
        <Route path="/dash/civic" element={<DashCivic />} />
        <Route path="/dash/atlas" element={<DashAtlas />} />
        <Route path="/dash/signal" element={<DashSignal />} />
        <Route path="/dash/archive" element={<DashArchive />} />
        <Route path="/dash/foundry" element={<DashFoundry />} />
        <Route path="/dash/constellation" element={<DashConstellation />} />
      </Routes>
      {onPreview ? <ConceptNav /> : <VariantSwitcher />}
    </>
  )
}

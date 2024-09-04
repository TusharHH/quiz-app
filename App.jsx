import { Routes , Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Choice from './pages/Choices'
import QuizComponent from './pages/Quiz'
import GratitudePage from './pages/GratitudePage'

function App() {

  return (
    <>
      <LandingPage />
      <Routes>
        <Route path="/" element={<Choice />} />
        <Route path="/Quiz" element={<QuizComponent />} />
        <Route path="/wall" element={<GratitudePage />} />
      </Routes>
    </>
  )
}

export default App


import './App.css'
import Naavbar from './components/Naavbar'
import Landing from './pages/Landing'
function App() {
  return (
    <div className="min-h-screen min-w-screen" id=''>
        <Naavbar />
        <div className="container mx-auto py-20 min-w-screen overflow-x-hidden xl:px-20">
            <Landing />
        </div>
    </div>
  )
}

export default App

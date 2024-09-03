import GoogleMapComponent from "./components/GoogleMapComponent"
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <>
      <div className='flex flex-row h-screen'>
        <Dashboard/>
        <GoogleMapComponent/>
      </div>
    </>
  )
}

export default App

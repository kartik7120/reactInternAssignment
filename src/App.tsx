import './App.css'
import BottomContainer from './components/BottomContainer'
import BottomMiddleComponent from './components/BottomMiddleComponent'
import Divider from './components/Divider'
import Footer from './components/Footer'
import HeaderImageComponent from './components/HeaderImageComponent'
import MiddleComponent from './components/MiddleComponent'
import Navbar from './components/Navbar'
import TopMiddleComponent from './components/TopMiddleComponent'

function App() {
  return (
    <div>
      <Navbar />
      <HeaderImageComponent />
      <TopMiddleComponent />
      <Divider />
      <MiddleComponent />
      <Divider />
      <BottomMiddleComponent />
      <Divider />
      <BottomContainer />
      <Footer />
    </div>
  )
}

export default App
